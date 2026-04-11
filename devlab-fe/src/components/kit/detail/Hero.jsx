import styles from "./Hero.module.css";

export default function Hero({ categoryName }) {
  return (
    <div className={styles["kit-hero"]}>
      <div className={styles["hero-badge"]}>{categoryName}</div>
      🚀
    </div>
  );
}
