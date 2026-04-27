import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles["top-bar"]}>
      <div className={styles["logo"]}>DevLab IDE</div>
      <div className={styles["project-info"]}>
        <span className={styles["project-title"]}>
          실시간 채팅 앱 만들기 / Step 3: WebSocket 연결
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
