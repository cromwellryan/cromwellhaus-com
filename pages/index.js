import Head from 'next/head'

import ExternalContentArticle from '../components/ExternalContentArticle';

import styles from '../styles/Home.module.css'

async function getRecentContent(count = 5) {
  const spaceId = 'w95trmn9jf9t';
  const environmentId = 'master';
  const accessToken = 'ouK7MFBRjJwXVRsj1jAV0s-O-nHOPHpC6lletlb_wHs';

  const limit = count < 25 ? count : 25;

  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&limit=${count}`;
  const res = await fetch(url)
  const data = await res.json()

  return data.items;
}

function articleForContent(content) {
  switch(content.sys.contentType.sys.id) {
    case 'externalContent':
      return <ExternalContentArticle key={content.sys.id} fields={content.fields} />
    default:
      return null;
  }
}

export default function Home({recentContent}) {
  const articles = recentContent
    .map(articleForContent);

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

      <section className={styles.section}>
        {articles}
      </section>

    </div>
  )
}

Home.getInitialProps = async (ctx) => {
  const recentContent = await getRecentContent(3);

  return { recentContent };
}
