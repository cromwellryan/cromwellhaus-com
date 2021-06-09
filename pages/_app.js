import '../styles/globals.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header className="header">
        <div className="header__container">
          <a className="header__link-home" aria-label="Link to Home" title="Link to Home" href="/">
            Ryan Cromwell
          </a>
          <nav className="header__nav">
            <a className="nav__link" href="/blog">Blog</a>
          </nav>
        </div>      </header>

      <section className="body-content">
        <Component {...pageProps} />
      </section>

      <footer>
        &copy;2021 Ryan Cromwell
      </footer>
    </div>
  );
}

export default MyApp
