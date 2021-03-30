import style from "../styles/Articles.module.css";
import Link from "next/Link";
const Article = ({ post }) => {
  return (
    <Link href="post/[id]" as={`/post/${post.id}`}>
      <div className={style.cardBody}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </Link>
  );
};

export default Article;
