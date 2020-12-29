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
      <a href=''>2020 Competition Results</a>
    </article>
  );
}
