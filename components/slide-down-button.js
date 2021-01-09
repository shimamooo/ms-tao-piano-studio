import styles from './slide-down-button.module.css';

export default function SlideDownButton({ slide }) {
  const scroll = () => {
    const news = document.querySelector(`.${slide}`);
    news.scrollIntoView();
  };

  return (
    <a className={styles.slideDownButton} onClick={scroll}>
      <span className={styles.circle}></span>
    </a>
  );
}
