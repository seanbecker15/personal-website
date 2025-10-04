import Head from 'next/head';

export default function SEO({ title, description, image }) {
  // Generate dynamic OG image URL if no custom image is provided
  const ogImage =
    image ||
    `/api/og?title=${encodeURIComponent(
      title,
    )}&description=${encodeURIComponent(description || '')}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
