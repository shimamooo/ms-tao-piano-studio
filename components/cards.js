import Card from './card';
import styles from './cards.module.css';

export default function Cards() {
  return (
    <div className={styles.cards}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
