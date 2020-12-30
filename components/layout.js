import utils from '../styles/utils.module.css';
import styles from './layout.module.css';
import HamburgerMenu from '../components/hamburger-menu';

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
          <div className={styles.container}>
            <ul className={`${utils.footerLinks} ${styles.footerLinks}`}>
              <li>Home</li>
              <li>About</li>
              <li>Student Achievements</li>
              <li>Photo Gallery</li>
              <li>Student Performances</li>
            </ul>
            <div className={styles.footerRight}>
              <div className={styles.contact}>
                <img src='img/email.svg' alt='email' />
                <img src='img/phone.svg' alt='phone' />
                <img src='img/wechat.svg' alt='wechat' />
              </div>
              <p className={styles.copyright}>&copy; Ms. Tao Piano Studio</p>
              <p className={styles.copyright}>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
