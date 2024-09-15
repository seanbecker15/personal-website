import Link from 'next/link';

import Card from '../../components/Card';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { getGlobalData } from '../../utils/global-data';
import MemoryImpactDemo from '../../components/MemoryImpactDemo';

export default function Benchmark({ globalData }) {
  return (
    <Layout>
      <Header name={globalData.name} />
      <MemoryImpactDemo />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();

  return { props: { globalData } };
}
