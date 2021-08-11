import ExternalContentArticle from '../components/ExternalContentArticle';
import PostArticle from '../components/PostArticle';

import { getPublications } from '../queries'

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

export default function Archive({ publications }) {
  const articles = publications
    .map(articleForContent);

  return (
    <>
      <h1>Archive</h1>
      <section>
        {articles}
      </section>
    </>
  );
}

Archive.getInitialProps = async (ctxt) => {
  const publications = await getPublications(1);

  return { publications };
}
