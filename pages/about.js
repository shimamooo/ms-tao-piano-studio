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

      <div className={styles.hr}></div>

      <section className={styles.aboutMsTao}>
        <figure className={styles.mstao}>
          <img src='img/mstao.jpg' alt='Ms Tao' />
          <figcaption>
            <p>
              Master of Arts in Piano Performance{' '}
              <b>University of Wyoming, USA 美国怀俄明洲立大学-钢琴演奏硕士</b>{' '}
            </p>
            <p>
              Bachelor of Arts in Piano Performance{' '}
              <b>
                Shanghai Conservatory of Music, China
                中国上海音乐学院-钢琴演奏学士{' '}
              </b>
            </p>
          </figcaption>
        </figure>
        <div className={styles.biography}>
          <p className={styles.about1}>
            Ms. Tao is an accomplished pianist in the area of classical piano.
            She performed in many different cities of China and United States.
            She successfully performed her Graduate Recital, Chair’s Honor
            Convocation, and Lowell Liebermann (U.S. famous composer) Piano
            Concerto No. 2 with the UW (University of Wyoming) Symphony
            Orchestra. She studied piano performance and education with famous
            Steinway Artist, Prof. Christopher Zhong, and the Keyboard Area
            Coordinator of the UW Music Department, Dr. Theresa Bogard.
          </p>
          <p className={styles.about2}>
            Ms. Tao instructed advanced students successfully enrolled in
            Shanghai Conservatory of Music, won National Piano Competitions,and
            taught in various music schools; in the United States, she
            instructed music major students to improve their technique, perform
            in different recitals and knowledge of Music Theory. After she came
            to the Bay Area, Ms.Tao became a member of MTAC (Music Teachers’
            Association of California), has taught Certificate of Merit, and
            ABRSM (Associated Board of the Royal Schools of Music) Examination.
            All of her students passed the Piano Performance and Music Theory
            exams with high scores. Ms Tao also instructed her students to win
            various international piano competitions. Most of her students enjoy
            participating in competitions every year.
          </p>
        </div>
      </section>
    </Layout>
  );
}
