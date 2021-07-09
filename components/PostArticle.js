import styles from '../styles/Article.module.css'

function PostArticle({fields}) {
  const { title, abstract, slug } = fields;
  const url = `/${slug}`;

  return (
    <article className={styles.article}>
      <h2 className={styles.title}><a className={styles.link} href={url}>{title}</a></h2>
      {abstract}
    </article>
  );
}

PostArticle.contentTypeId = 'post';

export default PostArticle;
