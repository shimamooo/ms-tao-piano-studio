import styles from './image-slider.module.css';
import { useEffect } from 'react';

export default function ImageSlider() {
  useEffect(() => {
    const slideshowImages = document.querySelectorAll(`.${styles.img}`);
    let index = 0;

    slideshowImages[index].style.opacity = 1;

    setInterval(() => {
      slideshowImages[index].style.opacity = 0;
      index = (index + 1) % slideshowImages.length;
      slideshowImages[index].style.opacity = 1;
    }, 5000);
  });

  return (
    <figure className={styles.imageSlider}>
      <img
        src='https://source.unsplash.com/random/1600x900'
        className={styles.img}
        alt=''
      />
      <img
        src='https://source.unsplash.com/user/erondu/1600x900'
        className={styles.img}
        alt=''
      />
      <img
        src='https://source.unsplash.com/collection/190727/1600x900'
        className={styles.img}
        alt=''
      />
    </figure>
  );
}
