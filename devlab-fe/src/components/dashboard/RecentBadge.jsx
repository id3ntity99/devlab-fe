import styles from "./RecentBadge.module.css";

export default function RecentBadge() {
  return (
    <div className={styles["section-card"]} style={{ marginBottom: "24px" }}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>최근 획득 배지</h2>
        <a href="#" className={styles["view-all-link"]}>
          전체 보기 →
        </a>
      </div>

      <div className={styles["achievements-grid"]}>
        <div className={styles["achievement-card"]}>
          <div className={styles["achievement-badge"]}>🏆</div>
          <div className={styles["achievement-title"]}>첫 완성</div>
          <div className={styles["achievement-description"]}>
            첫 프로젝트 완료
          </div>
        </div>
        <div className={styles["achievement-card"]}>
          <div className={styles["achievement-badge"]}>🔥</div>
          <div className={styles["achievement-title"]}>연속 학습</div>
          <div className={styles["achievement-description"]}>7일 연속</div>
        </div>
        <div className={styles["achievement-card"]}>
          <div className={styles["achievement-badge"]}>⭐</div>
          <div className={styles["achievement-title"]}>빠른 학습자</div>
          <div className={styles["achievement-description"]}>1주일 완성</div>
        </div>
      </div>
    </div>
  );
}
