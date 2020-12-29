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
      <footer>I'm the footer</footer>
    </section>
  );
}
