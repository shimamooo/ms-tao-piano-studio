import utils from '../styles/utils.module.css';
import styles from './layout.module.css';
import HamburgerMenu from '../components/hamburger-menu';
import Link from 'next/link';

export default function Layout({ children, page }) {
  return (
    <section>
      <div className={styles.hr}></div>
      <header className={`${styles.header} ${utils.container}`}>
        <HamburgerMenu />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={utils.container}>
          <h3 className={utils.h3}>Ms. Tao Piano Studio</h3>
          <div className={styles.contact}>
            <a href='mailto:taopianostudio@gmail.com' target='_blank'>
              <img src='img/email.svg' alt='email' />
            </a>
            <a href='tel:9258951393' target='_blank'>
              <img src='img/phone.svg' alt='phone' />
            </a>
            <img src='img/wechat.svg' alt='wechat' />
          </div>
          <div className={styles.container}>
            <ul className={`${utils.footerLink} ${styles.footerLinks}`}>
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
            <div className={styles.footerRight}>
              <div className={styles.copyright}>
                <p>&copy; Ms. Tao Piano Studio</p>
                <p>All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
