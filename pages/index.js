import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>

      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

        <title>Ryan Cromwell</title>
        <meta name="description" content="" />
        <link href="https://twitter.com/cromwellryan" rel="me" />
        <link href="https://github.com/cromwellryan" rel="me" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@cromwellryan" />
        <meta name="twitter:title" content="Cromwellhaus.com" />
        <meta name="twitter:description" content="Ryan Cromwell: Dad of 4. Technical Director @hearsparkbox. Big vision. Small changes. Always Learning." />

        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />

        <link rel='canonical' href="https://cromwellhaus.com" />
      </Head>

      <main>
        <p>Hi!</p>
        <p>Father of 4. Leading the development team @Sparkbox. Fly fishing when I can.</p>
      </main>

      <section className={styles.section}>
        <h2>Recent posts</h2>

        <article>
          <a href="#" className={styles.recentPostTitle}>Traits of a Build and Deployment Pipeline</a>
          <p>A great software build and deployment pipeline encourages collaboration and transparency. Here's what we have found makes a successful pipeline.</p>
        </article>

        <article>
          <a href="#" className={styles.recentPostTitle}>Enabling a Data Science Team Case Study</a>
          <p>How do you bring data to life? We worked with an internal team of data scientists to bring their thoughts into code with a solid prototype for testing out ideas.</p>
        </article>
      </section>

    </div>
  )
}
