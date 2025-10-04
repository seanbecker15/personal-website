import Link from 'next/link';
import Head from 'next/head';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';

export default function Custom404({ globalData }) {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Header name={globalData.name} />
      <main className="w-full">
        <div className="text-center py-20">
          <h1 className="text-6xl lg:text-8xl font-bold mb-4">404</h1>
          <p className="text-2xl lg:text-3xl mb-8">Page Not Found</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg hover:underline"
          >
            <ArrowIcon className="rotate-180" />
            Back to Home
          </Link>
        </div>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
