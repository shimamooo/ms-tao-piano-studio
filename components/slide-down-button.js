import styles from './slide-down-button.module.css';
import util from '../styles/utils.module.css';

export default function () {
  return (
    <div className={`${util.container} ${styles.slideDownButton}`}>
      <span></span>
      <span></span>
    </div>
  );
}