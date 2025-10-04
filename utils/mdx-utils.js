import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypePrism from '@mapbox/rehype-prism';
import remarkGfm from 'remark-gfm';
import { Feed } from 'feed';

export const POSTS_PATH = path.join(process.cwd(), 'blog');
export const PUBLIC_PATH = path.join(process.cwd(), 'public');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));

export const sortPostsByDate = (posts, asc) => {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.date);
    const bDate = new Date(b.data.date);
    return asc ? aDate - bDate : bDate - aDate;
  });
};

export const makeSlug = (filePath) => filePath?.replace(/\.mdx?$/, '');

export const getPosts = ({ asc = false } = { asc: false }) => {
  let posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  posts = sortPostsByDate(posts, asc);

  return posts;
};

export const getPostBySlug = async (slug) => {
  const postFilePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
    scope: data,
  });

  return { mdxSource, data, postFilePath };
};

const emptyPost = {
  title: '',
  slug: '',
};

export const getNextPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex - 1];
  // no prev post found
  if (!post) return emptyPost;

  const nextPostSlug = makeSlug(post?.filePath);

  return {
    title: post.data.title,
    slug: nextPostSlug,
  };
};

export const getPreviousPostBySlug = (slug) => {
  const posts = getPosts();
  const currentFileName = `${slug}.mdx`;
  const currentPost = posts.find((post) => post.filePath === currentFileName);
  const currentPostIndex = posts.indexOf(currentPost);

  const post = posts[currentPostIndex + 1];
  // no prev post found
  if (!post) return emptyPost;

  const previousPostSlug = makeSlug(post?.filePath);

  return {
    title: post.data.title,
    slug: previousPostSlug,
  };
};

export const generateRssFeed = () => {
  const url = process.env.FEED_URL;
  const title = process.env.FEED_TITLE;
  const description = process.env.FEED_DESCRIPTION;
  const feedOptions = {
    title,
    description,
    id: url,
    link: url,
    image: `${url}/logo.png`,
    favicon: `${url}/favicon.ico`,
    copyright: `Copyright ${new Date().getFullYear()} Sean Becker`,
    generator: 'Feed for Node.js',
    feedLinks: {
      json: `${url}/feed.json`,
      atom: `${url}/atom.xml`,
      rss2: `${url}/rss.xml`,
    },
  };

  const feed = new Feed(feedOptions);

  const allPosts = getPosts({ asc: true });
  allPosts.forEach((post) => {
    const { data, content } = post;
    const postUrl = `${url}/blog/${makeSlug(post.filePath)}`;
    feed.addItem({
      title: data.title,
      id: postUrl,
      link: postUrl,
      description: data.description,
      date: new Date(data.updated || data.date),
      content,
    });
  });
  fs.writeFileSync(`${PUBLIC_PATH}/rss.xml`, feed.rss2());
  fs.writeFileSync(`${PUBLIC_PATH}/feed.json`, feed.json1());
  fs.writeFileSync(`${PUBLIC_PATH}/atom.xml`, feed.atom1());
};
