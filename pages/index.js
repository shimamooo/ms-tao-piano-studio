import Head from 'next/head';
import styles from '../styles/Home.module.css';
import util from '../styles/utils.module.css';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>Ms. Tao Piano Studio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={util.container}>Real shit</div>
    </Layout>
  );
}
