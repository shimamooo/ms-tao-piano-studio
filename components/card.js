import styles from './card.module.css';
import util from '../styles/utils.module.css';

export default function Card({ year, section, img }) {
  if (section === 'news') {
    return (
      <article className={styles.article}>
        <a href='student-achievements#2019'>
          <img
            className={styles.img}
            src={`img/${img}.jpg`}
            alt={`${year} competition results`}
          />
        </a>
        <p className={util.labelCards}>Competition</p>
        <div className={styles.cardLink}>
          <a href='student-achievements#2019' className={styles.link}>
            <p>{year} Competition Results</p>
            <img
              src='img/arrow-right.svg'
              alt='arrow right'
              className={styles.arrow}
            />
          </a>
        </div>
      </article>
    );
  } else {
    return 'chill';
  }
}
