import styles from './card.module.css';
import util from '../styles/utils.module.css';

export default function Card() {
  return (
    <article className={styles.article}>
      <a href=''>
        <img
          className={styles.img}
          src='https://source.unsplash.com/random'
          alt=''
        />
      </a>
      <p className={util.labelCards}>Competition</p>
      <div className={styles.cardLink}>
        <a href='' className={styles.link}>
          <p>2020 Competition Results</p>
          <img
            src='img/arrow-right.svg'
            alt='arrow right'
            className={styles.arrow}
          />
        </a>
      </div>
    </article>
  );
}
