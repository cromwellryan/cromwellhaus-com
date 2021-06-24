import Head from 'next/head'
import Image from 'next/image'

import '../styles/globals.css'
import Prefooter from '../components/Prefooter'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />


        <title>Ryan Cromwell</title>
        <meta name="description" content="Ryan Cromwell - Big Vision. Small Changes. Learning by shipping." />
        <link href="https://twitter.com/cromwellryan" rel="me" />
        <link href="https://github.com/cromwellryan" rel="me" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cromwellryan" />
        <meta name="twitter:title" content="Cromwellhaus.com" />
        <meta name="twitter:description" content="Ryan Cromwell: Dad of 4. Technical Director @hearsparkbox. Big vision. Small changes. Always Learning." />

        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

        <link rel='canonical' href="https://cromwellhaus.com" />
      </Head>

      <header className="header">
        <div className="header__container">
          <h1 className="header__link-home">
            <a aria-label="Link to Home" className="header__link-home" title="Link to Home" href="/">
              Ryan Cromwell
            </a>
          </h1>
          <nav className="header__nav">
            <a className="nav__link" href="/about">About</a>
          </nav>
        </div>
      </header>

      <main className="body-content">
        <Component {...pageProps} />
      </main>

      <Prefooter />


      <footer>
        &copy;2021 Ryan Cromwell
      </footer>
    </div>
  )
}

export default MyApp
