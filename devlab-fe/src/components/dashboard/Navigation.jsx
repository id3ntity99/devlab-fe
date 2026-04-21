import styles from "./Navigation.module.css";

export default function Navigation({ nickname }) {
  return (
    <nav>
      <div className={styles["nav-container"]}>
        <div className={styles["logo"]}>
          <a href="/dashboard">DevLab</a>
        </div>
        <div className={styles["nav-center"]}>
          <a
            href="#dashboard"
            className={`${styles["nav-link"]} ${styles["active"]}`}
          >
            대시보드
          </a>
          <a href="/kits" className={styles["nav-link"]}>
            킷 둘러보기
          </a>
          <a href="#community" className={styles["nav-link"]}>
            커뮤니티
          </a>
        </div>
        <div className={styles["nav-right"]}>
          <button className={styles["notification-btn"]}>
            🔔
            <span className={styles["notification-badge"]}>3</span>
          </button>
          <div className={styles["user-menu"]}>
            <div className={styles["user-avatar"]}></div>
            <span className={styles["user-name"]}>{nickname}</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
