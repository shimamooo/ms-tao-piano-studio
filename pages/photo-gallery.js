import Head from 'next/head';
import Layout from '../components/layout';
import utils from '../styles/utils.module.css';
import styles from '../styles/PhotoGallery.module.css';

export default function PhotoGallery() {
  return (
    <Layout page='photo-gallery'>
      <Head>
        <title>Photo Gallery</title>
      </Head>
      <h1 className={`${utils.h2} ${styles.h1}`}>Photo Gallery</h1>
      <main className={utils.container} className={styles.imageGrid}>
        <div>
          <img
            src='img/2019-alameda-east-competition-d.jpg'
            alt='2019 alameda east competition'
          />
        </div>
        <div>
          <img src='img/2019-usomc-michael.jpg' alt='2019 usomc michael' />
        </div>
        <div>
          <img src='img/2019-usomc-angela.jpg' alt='2019 usomc angela' />
        </div>
        <div>
          <img src='img/img12.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/2019-usomc-amber.jpg' alt='2019 usomc amber' />
        </div>
        <div>
          <img
            src='img/alameda-division-c-winners.jpg'
            alt='alameda division c winners'
          />
        </div>
        <div>
          <img src='img/fullsizerender.jpg' alt='max chan' />
        </div>
        <div>
          <img src='img/img-4870_orig.jpg' alt='recital' />
        </div>
        <div>
          <img src='img/img-5624.jpg' alt='usomc competition' />
        </div>
        <div>
          <img src='img/img.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/max2.jpg' alt='max chan' />
        </div>
        <div>
          <img src='img/img1.jpg' alt='alex ren' />
        </div>
        <div>
          <img src='img/max.jpg' alt='max chan' />
        </div>
        <div>
          <img src='img/img2.jpg' alt='recital' />
        </div>
        <div>
          <img src='img/img3.jpg' alt='award' />
        </div>
        <div>
          <img src='img/img4.jpg' alt='award' />
        </div>
        <div>
          <img src='img/img5.jpg' alt='recital' />
        </div>
        <div>
          <img src='img/img6.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/2019-usomc-jessica.jpg' alt='jessica' />
        </div>
        <div>
          <img src='img/img8.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img9.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img10.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img11.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img7.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img13.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img14.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img15.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img16.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img17.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img18.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img19.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img20.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img21.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img22.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img23.jpg' alt='competition' />
        </div>
        <div>
          <img src='img/img24.jpg' alt='competition' />
        </div>
      </main>
    </Layout>
  );
}
