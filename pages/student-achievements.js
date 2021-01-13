import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/StudentAchievements.module.css';

export default function StudentAchievements() {
  return (
    <Layout page='student-achievements'>
      <Head>
        <title>Student Achievements</title>
      </Head>
      <main className={utils.container} className={styles.container}>
        <h1 className={utils.h2}>Student Achievements</h1>
        <section className={styles.tabs}>
          <div className={styles.tab}>
            <input
              type='checkbox'
              name='year'
              id='2019'
              className={styles.input}
            />
            <label htmlFor='2019' className={styles.label}>
              <p>Year of 2019</p>
              <img
                src='img/arrow.svg'
                alt='toggle dropdown'
                className={styles.svg}
              />
            </label>
            <div className={styles.hiddenContent}>
              <div className={styles.padding}>
                <div>
                  <h3>Alex Ren</h3>
                  <p>
                    <img
                      src='img/gold.svg'
                      alt='gold medal'
                      className={styles.medal}
                    />
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
          </div>

          <div className={styles.tab}>
            <input
              type='checkbox'
              name='year'
              id='2018'
              className={styles.input}
            />
            <label htmlFor='2018' className={styles.label}>
              <p>Year of 2018</p>
              <img
                src='img/arrow.svg'
                alt='toggle dropdown'
                className={styles.svg}
              />
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
