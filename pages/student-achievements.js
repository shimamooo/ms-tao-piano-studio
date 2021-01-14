import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/StudentAchievements.module.css';
import { yearOf2019 } from '../data/achievements';

export default function StudentAchievements() {
  const placement = (placement) => {
    if (placement === 'gold') {
      return '1st Place';
    } else if (placement === 'silver') {
      return '2nd Place';
    } else if (placement === 'bronze') {
      return '3rd Place';
    } else if (placement === 'pewter') {
      return '4th Place';
    }
  };

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
                {yearOf2019.map((student) => {
                  return (
                    <div>
                      <h3>{student.name}</h3>
                      {student.events.map((event) => {
                        return (
                          <div className={styles.award}>
                            <img
                              src={`img/${event.placement}.svg`}
                              alt={`${event.placement} medal`}
                              className={styles.medal}
                            />
                            <p>
                              <b className={styles.b}>
                                {placement(event.placement)}
                              </b>{' '}
                              Won {event.competition}: <a>{event.piece}</a>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}

                {/* <div>
                  <h3>Alex Ren</h3>
                  <div className={styles.award}>
                    <img
                      src='img/gold.svg'
                      alt='gold medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>1st Place</b> Won 2019 MTAC
                      Alameda County East Piano Competition - Division D:{' '}
                      <a>Kabalevsky Sonata Op. 46 No. 3</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3>Anthony Kuang</h3>
                  <div className={styles.award}>
                    <img
                      src='img/silver.svg'
                      alt='silver medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>2nd Place</b> Won 2019 MTAC
                      Alameda County East Piano Competition - Division C:{' '}
                      <a>J.S Bach Toccata BWV 914</a>
                    </p>
                  </div>
                  <div className={styles.award}>
                    <img
                      src='img/silver.svg'
                      alt='silver medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>2nd Place</b> Won 2019 US Open
                      Music Competition Treasury of Chinese Composers - Senior:{' '}
                      <a>Ding On the Shore</a>
                    </p>
                  </div>
                  <div className={styles.award}>
                    <img
                      src='img/bronze.svg'
                      alt='bronze medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>3rd Place</b> Won 2019 US Open
                      Music Competition Treasury of Baroque Composers - Senior:{' '}
                      <a>J.S Bach Toccata BWV 914</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3>Michael Li</h3>
                  <div className={styles.award}>
                    <img
                      src='img/silver.svg'
                      alt='silver medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>2nd Place</b> Won 2019 US Open
                      Music Competition Treasury of Romantic Composers - Senior:{' '}
                      <a>Schumann Evening Op. 12, No. 1</a>
                    </p>
                  </div>
                  <div className={styles.award}>
                    <img
                      src='img/bronze.svg'
                      alt='bronze medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>3rd Place</b> Won 2019 MTAC
                      Alameda County East Piano Competition - Division C:{' '}
                      <a></a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3>Max Chan</h3>
                  <div className={styles.award}>
                    <img
                      src='img/silver.svg'
                      alt='silver medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>2nd Place</b> Won 2019 MTAC
                      Alameda County East Piano Competition - Division D:{' '}
                      <a></a>
                    </p>
                  </div>
                  <div className={styles.award}>
                    <img
                      src='img/bronze.svg'
                      alt='bronze medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>3rd Place</b> Won 2019 US Open
                      Music Competition Treasury of Classical Composers -
                      Senior: <a>Mozart Sonata K. 310</a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3>Angela Yang</h3>
                  <div className={styles.award}>
                    <img
                      src='img/bronze.svg'
                      alt='silver medal'
                      className={styles.medal}
                    />
                    <p>
                      <b className={styles.b}>3rd Place</b> Won 2019 US Open
                      Music Competition Treasury of Russian Composers -
                      Intermediate: <a>Schedrin: Thirds</a>
                    </p>
                  </div>
                </div> */}
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
