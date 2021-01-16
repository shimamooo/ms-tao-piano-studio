import Card from './card';
import styles from './cards.module.css';
import { useEffect } from 'react';

export default function Cards({ section }) {
  useEffect(() => {
    const sliders = document.querySelectorAll(`.${styles.cards}`);
    let isDown = false;
    let startX;
    let scrollLeft;

    sliders.forEach((slider) => {
      slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });

      slider.addEventListener('mouseleave', () => {
        isDown = false;
      });

      slider.addEventListener('mouseup', () => {
        isDown = false;
      });

      slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3;
        slider.scrollLeft = scrollLeft - walk;
      });
    });
  });

  if (section === 'news') {
    return (
      <div className={styles.cards}>
        <Card year='2019' section={section} />
        <Card year='2018' section={section} />
        <Card year='2017' section={section} />
        <Card year='2016' section={section} />
        <Card year='2015' section={section} />
        <Card year='2014' section={section} />
        <Card year='2013' section={section} />
        <Card year='2012' section={section} />
        <Card year='2011' section={section} />
      </div>
    );
  } else if (section === 'media') {
    return (
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
