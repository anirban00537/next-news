import styles from "../styles/Home.module.css";
import Navbar from "./Navbar";

const layouts = ({ children }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {" "}
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default layouts;
