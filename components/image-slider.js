import styles from './image-slider.module.css';
import { useEffect } from 'react';
import utils from '../styles/utils.module.css';

export default function ImageSlider() {
  useEffect(() => {
    const slideshowImages = document.querySelectorAll(`.${styles.img}`);
    let index = 0;

    slideshowImages[index].style.opacity = 1;

    setInterval(() => {
      slideshowImages[index].style.opacity = 0;
      index = (index + 1) % slideshowImages.length;
      slideshowImages[index].style.opacity = 1;
    }, 10000);
  });

  return (
    <>
      <figure className={styles.imageSlider}>
        <img
          src='img/2019-alameda-east-competition-d.jpg'
          className={styles.img}
          alt='competition'
        />
        <img
          src='img/dolo-iglesias-FjElUqGfbAw-unsplash.jpg'
          className={styles.img}
          alt='piano'
        />
        <img src='img/img-4870_orig.jpg' className={styles.img} alt='recital' />
        <span className={styles.overlay}></span>
      </figure>
      <div className={`${styles.heading} ${utils.container}`}>
        <p className={utils.labelH1}>Ms. Tao</p>
        <h1 className={utils.h1}>Piano Studio</h1>
      </div>
    </>
  );
}
