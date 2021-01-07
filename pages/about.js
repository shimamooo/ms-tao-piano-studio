import Head from 'next/head';
import Layout from '../components/layout';
import util from '../styles/utils.module.css';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <Layout page='about'>
      <Head>
        <title>About</title>
      </Head>
      <main className={`${util.container} ${styles.content}`}>
        <h1 className={util.h2}>About</h1>
        <img src='img/about.jpg' alt='Ms. Tao and students' />
        <p>
          Children who study a musical instrument learn responsibility and
          discipline. They gain pride in their accomplishments which in turn
          makes them more confident and think in a logical manner. Students who
          study music often perform better in school. These are just a few of
          the benefits that your child can gain.
        </p>
        <p>
          The goal of the Ms. Tao Piano Studio is to provide an environment
          suitable for learning piano and encouraging a love of music. Lesson
          programs are designed to meet the specific needs of each student and
          will be tailored to the level of your child’s ability. Chinese piano
          music, Chinese folk songs will also be provided according to students’
          and parents’ wishes. Also, Ms. Tao and her students hold annual piano
          recitals every year. Fluent English, Cantonese and Mandarin are spoken
          in classes.
        </p>
        <p>
          If you have further questions, please feel free to contact Ms. Tao at{' '}
          <a href='tel:9258951393' target='_blank'>
            (925) 895-1393
          </a>
          , leave a message, or email{' '}
          <a href='mailto:taopianostudio@yahoo.com' target='_blank'>
            taopianostudio@yahoo.com
          </a>{' '}
          for more information.
        </p>
      </main>
    </Layout>
  );
}
