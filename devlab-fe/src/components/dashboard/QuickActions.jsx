import styles from "./QuickActions.module.css";

export default function QuickActions() {
  return (
    <div className={styles["quick-actions"]}>
      <div className={styles["action-card"]}>
        <div className={styles["action-icon"]}>🚀</div>
        <div className={styles["action-title"]}>새 프로젝트 시작</div>
        <div className={styles["action-subtitle"]}>킷 둘러보기</div>
      </div>
      <div className={styles["action-card"]}>
        <div className={styles["action-icon"]}>📚</div>
        <div className={styles["action-title"]}>학습 계속하기</div>
        <div className={styles["action-subtitle"]}>진행 중인 프로젝트</div>
      </div>
    </div>
  );
}
