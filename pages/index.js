import Head from "next/head";
import Article from "../components/Article";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="home ,news" />
      </Head>
      {posts.map((post, index) => (
        <Article post={post} key={index} />
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
};
