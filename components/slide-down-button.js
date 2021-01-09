import styles from './slide-down-button.module.css';
import smoothscroll from 'smoothscroll-polyfill';
import { useEffect } from 'react';

export default function SlideDownButton({ slide }) {
  useEffect(() => {
    smoothscroll.polyfill();
  });

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
