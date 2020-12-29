import utils from '../styles/utils.module.css';
import styles from './layout.module.css';
import HamburgerMenu from '../components/hamburger-menu';

export default function Layout({ children, page }) {
  return (
    <section>
      <header className={`${styles.header} ${utils.container}`}>
        <HamburgerMenu />
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <div className={utils.container}>
          <h3 className={utils.h3}>Ms. Tao Piano Studio</h3>
          <nav>
            <ul className={styles.footerLinks}>
              <li>Home</li>
              <li>About</li>
              <li>Student Achievements</li>
              <li>Photo Gallery</li>
              <li>Student Performances</li>
            </ul>
          </nav>
        </div>
      </footer>
    </section>
  );
}
