import Head from 'next/head';

export default function SEO({ title, description, image, url }) {
  const siteUrl = 'https://seanbecker.me';

  // Generate dynamic OG image URL if no custom image is provided
  const ogImagePath =
    image ||
    `/api/og?title=${encodeURIComponent(
      title,
    )}&description=${encodeURIComponent(description || '')}`;

  // Ensure absolute URL for OG image
  const ogImage = ogImagePath.startsWith('http')
    ? ogImagePath
    : `${siteUrl}${ogImagePath}`;
  const pageUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      <meta name="robots" content="index, follow" />
    </Head>
  );
}
