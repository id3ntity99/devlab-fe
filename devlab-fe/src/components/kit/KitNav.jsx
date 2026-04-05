import styles from "./KitNav.module.css";

export default function KitNav() {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        <div className={styles["logo"]}>DevLab</div>
        <div className={styles["nav-actions"]}>
          <a href="#" className={`${styles["btn"]} ${styles["btn-primary"]}`}>
            내 학습
          </a>
        </div>
      </div>
    </nav>
  );
}
