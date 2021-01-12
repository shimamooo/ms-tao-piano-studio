import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';

export default function StudentAchievements() {
  return (
    <Layout page='student-achievements'>
      <Head>
        <title>Student Achievements</title>
      </Head>
      <main className={utils.container}>
        <h1 className={utils.h2}>Student Achievements</h1>
        <section>
          <div>
            <h2>2020</h2>
          </div>
          <div>
            <h2>2019</h2>
            <div>
              <h3>Alex Ren</h3>
              <p>
                1st place - Won 2019 MTAC Alameda County East Piano Competition
              </p>
            </div>
          </div>
          <div>
            <h2>2018</h2>
          </div>
          <div>
            <h2>2017</h2>
          </div>
          <div>
            <h2>2016</h2>
          </div>
          <div>
            <h2>2015</h2>
          </div>
          <div>
            <h2>2014</h2>
          </div>
          <div>
            <h2>2013</h2>
          </div>
          <div>
            <h2>2012</h2>
          </div>
          <div>
            <h2>2011</h2>
          </div>
        </section>
      </main>
    </Layout>
  );
}
