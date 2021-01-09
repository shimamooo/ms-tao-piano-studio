import styles from './slide-down-button.module.css';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default function SlideDownButton({ slide }) {
  const scroll = () => {
    const news = document.querySelector(`.${slide}`);
    news.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a className={styles.slideDownButton} onClick={scroll}>
      <span className={styles.circle}></span>
    </a>
  );
}
