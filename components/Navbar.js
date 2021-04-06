import styles from "../styles/Nav.module.css";
import Link from "next/Link";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navBrandSection}>
        <span className={styles.spanDesign}>NEXT</span>NEWSIFY
      </div>
      <div className={styles.navitemSection}>
        <ul className={styles.navMenu}>
          <li className={styles.menuItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.menuItem}>
            {" "}
            <Link href="/about">about</Link>
          </li>
          <li className={styles.menuItem}>
            {" "}
            <Link href="/feed">FEED</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
