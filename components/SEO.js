import Head from 'next/head';

// TODO: Refactor component to be more composable (rather than pass in ogImageTitle, break it up)
export default function SEO({ title, description, image, url, ogImageTitle }) {
  const siteUrl = 'https://seanbecker.me';
  const internalOgImageTitle = ogImageTitle || title || 'Sean Becker';

  // Generate dynamic OG image URL if no custom image is provided
  const ogImagePath =
    image ||
    `/api/og?title=${encodeURIComponent(
      internalOgImageTitle,
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
      <meta property="og:title" content={internalOgImageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={internalOgImageTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={internalOgImageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={internalOgImageTitle} />

      <meta name="robots" content="index, follow" />
    </Head>
  );
}
