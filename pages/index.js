import ExternalContentArticle from '../components/ExternalContentArticle';
import PostArticle from '../components/PostArticle';

import { getRecentPublications } from '../queries'

import styles from '../styles/Home.module.css'

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
  const recentContent = await getRecentPublications(3);

  return { recentContent };
}
