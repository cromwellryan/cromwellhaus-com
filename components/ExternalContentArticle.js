import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from '../styles/Article.module.css'


function ExternalContentArticle({fields}) {
  return (
    <article className={styles.article}>
      <h2 className={[styles.title, styles.externalAnnotation].join(' ')}><a className={styles.link} href={fields.url}>{fields.title}</a></h2>
      {documentToReactComponents(fields.abstract)}
    </article>
  );
}


ExternalContentArticle.contentTypeId = 'externalContent';

export default ExternalContentArticle;
