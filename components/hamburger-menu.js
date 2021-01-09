import styles from './hamburger-menu.module.css';
import Link from 'next/link';

export default function HamburgerMenu() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <input type='checkbox' />

        <span className={styles.hamburger1}></span>
        <span className={styles.hamburger2}></span>
        <span className={styles.hamburger3}></span>

        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href='/student-achievements'>
              <a>Student Achievements</a>
            </Link>
          </li>
          <li>
            <Link href='/photo-gallery'>
              <a>Photo Gallery</a>
            </Link>
          </li>
          <li>
            <Link href='/student-performances'>
              <a>Student Performances</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
