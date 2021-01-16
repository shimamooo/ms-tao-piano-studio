import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/StudentAchievements.module.css';
import { yearOf2019 } from '../data/achievements';
import { yearOf2018 } from '../data/achievements';
import { yearOf2017 } from '../data/achievements';
import { yearOf2016 } from '../data/achievements';

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
    } else if (placement === 'honorableMention') {
      return 'Honorable Mention';
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
              <div className={styles.padding}>
                {yearOf2018.map((student) => {
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
              </div>
            </div>
          </div>

          <div className={styles.tab}>
            <input
              type='checkbox'
              name='year'
              id='2017'
              className={styles.input}
            />
            <label htmlFor='2017' className={styles.label}>
              <p>Year of 2017</p>
              <img
                src='img/arrow.svg'
                alt='toggle dropdown'
                className={styles.svg}
              />
            </label>
            <div className={styles.hiddenContent}>
              <div className={styles.padding}>
                {yearOf2017.map((student) => {
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
              </div>
            </div>
          </div>

          <div className={styles.tab}>
            <input
              type='checkbox'
              name='year'
              id='2016'
              className={styles.input}
            />
            <label htmlFor='2016' className={styles.label}>
              <p>Year of 2016</p>
              <img
                src='img/arrow.svg'
                alt='toggle dropdown'
                className={styles.svg}
              />
            </label>
            <div className={styles.hiddenContent}>
              <div className={styles.padding}>
                {yearOf2016.map((student) => {
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
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
