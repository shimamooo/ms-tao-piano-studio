import Head from 'next/head';
import styles from '../styles/Home.module.css';
import util from '../styles/utils.module.css';
import Layout from '../components/layout';
import ImageSlider from '../components/image-slider';
import SlideDownButton from '../components/slide-down-button';

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
    </Layout>
  );
}
