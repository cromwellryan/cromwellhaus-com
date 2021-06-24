import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import styles from '../styles/ExternalContentArticle.module.css'


export default function ExternalContentArticle({fields}) {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}><a className={styles.link} href={fields.url}>{fields.title}</a></h2>
      {documentToReactComponents(fields.abstract)}
    </article>
  );
}

