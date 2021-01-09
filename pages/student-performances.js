import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/StudentPerformances.module.css';
import Videos from '../components/videos';

export default function StudentPerformances() {
  return (
    <Layout page='student-performances'>
      <Head>
        <title>Student Performances</title>
      </Head>
      <main className={utils.container}>
        <h1 className={`${utils.h2} ${styles.heading}`}>
          Student Performances
        </h1>
        <Videos />
      </main>
    </Layout>
  );
}
