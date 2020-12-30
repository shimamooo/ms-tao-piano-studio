import styles from './slide-down-button.module.css';

export default function SlideDownButton() {
  return (
    <div className={styles.slideDownButton}>
      <span className={styles.circle}></span>
    </div>
  );
}
