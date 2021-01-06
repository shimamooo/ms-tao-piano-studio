import Card from './card';
import styles from './cards.module.css';
import { useEffect } from 'react';

export default function Cards() {
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
