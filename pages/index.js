import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Santa's elves have dropped the keys to their sleigh somewhere into the ocean and it's up to me to find them.
          This is my mission log.
        </p>
      </section>
    </Layout>
  );
}