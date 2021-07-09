import ExternalContentArticle from '../components/ExternalContentArticle';
import PostArticle from '../components/PostArticle';

import { spaceId, environmentId, accessToken } from '../contentful';

import styles from '../styles/Home.module.css'

async function getRecentContent(count = 5) {
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
    case PostArticle.contentTypeId:
      return <PostArticle key={content.sys.id} fields={content.fields} />
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
        <h2>Recent thoughts, talks, and publications</h2>
        {articles}
      </section>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const recentContent = await getRecentContent(3);

  return { recentContent };
}
