import { useState } from 'react';
import Fuse from 'fuse.js';
import Card from './Card';

export default function Search({ posts }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value);
    const fuse = new Fuse(posts, {
      keys: ['data.title', 'data.description', 'content'],
    });
    const results = fuse.search(value).map((result) => result.item);
    setResults(results);
  };

  const cards = query ? results : posts;
  return (
    <>
      <input
        className="w-full px-4 py-2 mb-8 rounded-lg shadow-md bg-white bg-opacity-30 focus:bg-opacity-50 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 dark:focus:ring-green-800 dark:focus:ring-opacity-50 dark:bg-black dark:bg-opacity-30 dark:focus:bg-opacity-50 transition"
        placeholder="Search..."
        onChange={handleChange}
      />
      <ul className="w-full">
        {cards.map((post) => (
          <Card post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}
