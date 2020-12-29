import styles from './image-slider.module.css';

export default function ImageSlider() {
  return (
    <figure className={styles.imageSlider}>
      <div className={styles.images}></div>
      <div className={styles.sliderBar}></div>
    </figure>
  );
}
