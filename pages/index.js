import Head from "next/head";
import Article from "../components/Article";
import NewsHome from "../components/NewsHome";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="home ,news" />
      </Head>
      <div className={styles.main}>
        {articles.map((article) => (
          <NewsHome article={article} />
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const ArticleRes = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us",
    {
      headers: {
        Authorization: `Bearer ${process.env.apiKey}`,
      },
    }
  );
  const { articles } = await ArticleRes.json();
  console.log(articles);
  return {
    props: {
      articles: articles,
    },
  };
};
