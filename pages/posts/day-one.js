import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function DayOne() {
  return (
    <Layout>
      <Head>
        <title>Day One Report</title>
      </Head>
      <h1>Day One Mission Log</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}