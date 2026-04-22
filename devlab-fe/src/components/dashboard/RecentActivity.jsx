import styles from "./RecentActivity.module.css";
export default function RecentActivity() {
  return (
    <div className={styles["section-card"]} style={{ marginBottom: "24px" }}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>최근 활동</h2>
      </div>

      <div className={styles["activity-item"]}>
        <div className={styles["activity-icon"]}>✅</div>
        <div className={styles["activity-content"]}>
          <div className={styles["activity-title"]}>레슨 완료</div>
          <div className={styles["activity-description"]}>
            WebSocket 연결 구현
          </div>
        </div>
        <div className={styles["activity-time"]}>2시간 전</div>
      </div>

      <div className={styles["activity-item"]}>
        <div className={styles["activity-icon"]}>🏆</div>
        <div className={styles["activity-content"]}>
          <div className={styles["activity-title"]}>배지 획득</div>
          <div className={styles["activity-description"]}>첫 프로젝트 완성</div>
        </div>
        <div className={styles["activity-time"]}>1일 전</div>
      </div>

      <div className={styles["activity-item"]}>
        <div className={styles["activity-icon"]}>💬</div>
        <div className={styles["activity-content"]}>
          <div className={styles["activity-title"]}>댓글 작성</div>
          <div className={styles["activity-description"]}>커뮤니티 Q&A</div>
        </div>
        <div className={styles["activity-time"]}>2일 전</div>
      </div>

      <div className={styles["activity-item"]}>
        <div className={styles["activity-icon"]}>📚</div>
        <div className={styles["activity-content"]}>
          <div className={styles["activity-title"]}>새 킷 구매</div>
          <div className={styles["activity-description"]}>
            이미지 분류 ML 모델
          </div>
        </div>
        <div className={styles["activity-time"]}>3일 전</div>
      </div>
    </div>
  );
}
