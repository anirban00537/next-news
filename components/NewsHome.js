import styles from "../styles/NewsHome.module.css";
const NewsHome = ({ article }) => {
  return (
    <div className={styles.homenews}>
      <img src={article.urlToImage} className={styles.image} />
      <div className={styles.info}>
        <div className={styles.authorAmdSource}>
          <p className={styles.author}>{article.author}</p>
          <p className={styles.source}>{article.source.name}</p>
        </div>

        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.Description}>{article.content}</p>
        <div className={styles.dateContainer}>
          <p className={styles.dateContainerCreated}>Created At</p>
          <p className={styles.dateContainerdate}>{article.publishedAt}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsHome;
