import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/StudentAchievements.module.css';
import { useEffect } from 'react';

export default function StudentAchievements() {
  useEffect(() => {
    const accordion = document.querySelector(`.${styles.accordion}`);
    let i;
  });

  return (
    <Layout page='student-achievements'>
      <Head>
        <title>Student Achievements</title>
      </Head>
      <main className={utils.container} className={styles.container}>
        <h1 className={utils.h2}>Student Achievements</h1>
        <section>
          <div>
            <input
              type='radio'
              name='year'
              id='2019'
              className={styles.input}
            />
            <label htmlFor='2019' className={styles.accordion}>
              Year of 2019
            </label>
            <div className={styles.hiddenContent}>
              <div>
                <h3>Alex Ren</h3>
                <p>
                  1st Place - Won 2019 MTAC Alameda County East Piano
                  Competition - Division D: Kabalevsky Sonata Op. 46 No. 3
                </p>
              </div>
              <div>
                <h3>Anthony Kuang</h3>
                <p>
                  2nd Place - Won 2019 MTAC Alameda County East Piano
                  Competition - Division C - J.S. Bach Toccata BWV 914
                </p>
                <p>
                  2nd Place - Won 2019 US Open Music Competition Treasury of
                  Chinese Composers - Senior: Ding On the Shore
                </p>
                <p>
                  3rd Place - Won 2019 US Open Music Competition Treasury of
                  Baroque Composers - Senior: J.S. Bach Toccata BWV 914
                </p>
              </div>
            </div>
          </div>

          <div>
            <input
              type='radio'
              name='year'
              id='2018'
              className={styles.input}
            />
            <label htmlFor='2018' className={styles.accordion}>
              Year of 2018
            </label>
            <div className={styles.hiddenContent}>
              <div>
                <h3>Alex Ren</h3>
                <p>
                  1st Place - Won 2019 MTAC Alameda County East Piano
                  Competition - Division D: Kabalevsky Sonata Op. 46 No. 3
                </p>
              </div>
              <div>
                <h3>Anthony Kuang</h3>
                <p>
                  2nd Place - Won 2019 MTAC Alameda County East Piano
                  Competition - Division C - J.S. Bach Toccata BWV 914
                </p>
                <p>
                  2nd Place - Won 2019 US Open Music Competition Treasury of
                  Chinese Composers - Senior: Ding On the Shore
                </p>
                <p>
                  3rd Place - Won 2019 US Open Music Competition Treasury of
                  Baroque Composers - Senior: J.S. Bach Toccata BWV 914
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
