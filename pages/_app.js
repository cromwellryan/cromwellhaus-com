import '../styles/globals.css'
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <header>
        <div>
          <a aria-label="Link to Home" title="Link to Home" href="/">
            Ryan Cromwell
          </a>
        </div>
        <nav>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      <Component {...pageProps} />

      <footer>
      </footer>
    </div>
  );
}

export default MyApp
