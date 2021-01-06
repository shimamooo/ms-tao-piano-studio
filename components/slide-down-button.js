import styles from './slide-down-button.module.css';

export default function SlideDownButton() {
  return (
    <a className={styles.slideDownButton} href='#news'>
      <span className={styles.circle}></span>
    </a>
  );
}
