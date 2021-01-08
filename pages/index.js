import Head from 'next/head';
import styles from '../styles/Home.module.css';
import util from '../styles/utils.module.css';
import Layout from '../components/layout';
import ImageSlider from '../components/image-slider';
import SlideDownButton from '../components/slide-down-button';
import Cards from '../components/cards';
import { useEffect } from 'react';

export default function Home() {
  return (
    <Layout page='home'>
      <Head>
        <title>Ms. Tao Piano Studio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className={styles.hero}>
        <div className={`${styles.heading} ${util.container}`}>
          <p className={util.labelH1}>Ms. Tao</p>
          <h1 className={util.h1}>Piano Studio</h1>
        </div>
        <ImageSlider />
        <SlideDownButton />
      </section>
      <section className={styles.news} id='news'>
        <h2 className={util.h2}>News</h2>
        <Cards />
      </section>
      <section className={styles.media}>
        <h2 className={util.h2}>Media</h2>
        <Cards />
      </section>
    </Layout>
  );
}
