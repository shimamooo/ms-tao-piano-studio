export default function Layout({ children, page }) {
  return (
    <section>
      <header>
        <nav>I'm the navbar</nav>
        <p>You are on {page}</p>
      </header>
      <main>{children}</main>
      <footer>I'm the footer</footer>
    </section>
  );
}
