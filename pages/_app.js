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

      <section className="prefooter">
        <div className="onecoolthing">
          <h3 className="onecoolthing__header">Cool <span className="util-highlight">Tech</span> Thing</h3>
          <p className="onecoolthing__body">Way to get to the bottom. If you leave here with nothing else, check out this one cool thing.</p>
        </div>

        <div className="onecoolthing">
          <h3 className="onecoolthing__header">Latest <span className="util-highlight">Tweet</span></h3>
          <p className="onecoolthing__body">
            <a className="twitter-timeline" href="https://twitter.com/cromwellryan" data-height="200" data-widget-id="368846062565347328" data-chrome="noheader nofooter noborders noscrollbar transparent" data-tweet-limit="1">Tweets by @cromwellryan</a>


          </p>

          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      </section>


      <footer>
        &copy;2021 Ryan Cromwell
      </footer>
    </div>
  );
}

export default MyApp
