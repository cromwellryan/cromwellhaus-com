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
    case ExternalContentArticle.contentTypeId:
      return <ExternalContentArticle key={content.sys.id} fields={content.fields} />
    default:
      return null;
  }
}

export default function Home({recentContent}) {
  const articles = recentContent
    .map(articleForContent);

  return (
    <>
      <section className={styles.section}>
        {articles}
      </section>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const recentContent = await getRecentContent(3);

  return { recentContent };
}
