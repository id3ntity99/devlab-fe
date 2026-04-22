import styles from "./Welcome.module.css";

export default function Welcome({ nickname }) {
  return (
    <div className={styles["welcome-section"]}>
      <div className={styles["welcome-content"]}>
        <h1 className={styles["welcome-title"]}>
          안녕하세요, {nickname}님! 👋
        </h1>
        <p className={styles["welcome-subtitle"]}>
          오늘도 새로운 프로젝트로 실력을 키워보세요
        </p>
        <div className={styles["welcome-stats"]}>
          <div className={styles["welcome-stat"]}>
            <div className={styles["stat-label"]}>진행 중인 프로젝트</div>
            <div className={styles["stat-value"]}>3</div>
          </div>
          <div className={styles["welcome-stat"]}>
            <div className={styles["stat-label"]}>완료한 프로젝트</div>
            <div className={styles["stat-value"]}>12</div>
          </div>
        </div>
      </div>
    </div>
  );
}
