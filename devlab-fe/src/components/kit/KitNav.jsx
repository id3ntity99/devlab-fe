import styles from "./KitNav.module.css";

export default function KitNav() {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        <div className={styles["logo"]}>
          <a href="/dashboard">DevLab</a>
        </div>
        <div className={styles["nav-actions"]}>
          <a
            href="/dashboard"
            className={`${styles["btn"]} ${styles["btn-primary"]}`}
          >
            내 학습
          </a>
        </div>
      </div>
    </nav>
  );
}
