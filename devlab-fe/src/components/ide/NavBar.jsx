import styles from "./NavBar.module.css";

export default function NavBar({ title, stepNum }) {
  return (
    <div className={styles["top-bar"]}>
      <div className={styles["logo"]}>DevLab IDE</div>
      <div className={styles["project-info"]}>
        <span className={styles["project-title"]}>
          Step {stepNum}: "{title}"
        </span>
      </div>
      <div className={styles["top-actions"]}>
        <button className={styles["btn-icon"]} title="설정">
          ⚙️
        </button>
        <button className={styles["btn-icon"]} title="도움말">
          ?
        </button>
        <button className={`${styles["btn"]} ${styles["btn-success"]}`}>
          ✓ 완료하기
        </button>
      </div>
    </div>
  );
}
