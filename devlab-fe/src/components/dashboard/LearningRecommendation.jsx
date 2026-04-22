import styles from "./LearningRecommendation.module.css";

export default function LearningRecommendation() {
  return (
    <div className={styles["section-card"]}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>추천 학습 경로</h2>
        <a href="#" className={styles["view-all-link"]}>
          더보기 →
        </a>
      </div>

      <div className={styles["path-item"]}>
        <div
          className={styles["path-step"]}
          style={{ backgroundColor: "#4CAF50" }}
        >
          ✓
        </div>
        <div className={styles["path-content"]}>
          <div className={styles["path-title"]}>JavaScript 기초 마스터</div>
          <div className={styles["path-description"]}>
            변수, 함수, 객체 등 JavaScript 기본 개념 학습
          </div>
          <span className={styles["path-status"]}>완료</span>
        </div>
      </div>

      <div className={styles["path-item"]}>
        <div className={styles["path-step"]}>2</div>
        <div className={styles["path-content"]}>
          <div className={styles["path-title"]}>React 시작하기</div>
          <div className={styles["path-description"]}>
            컴포넌트, Props, State를 활용한 인터랙티브 UI 개발
          </div>
          <span className={`${styles["path-status"]} ${styles["in-progress"]}`}>
            진행중
          </span>
        </div>
      </div>

      <div className={styles["path-item"]}>
        <div className={styles["path-step"]}>3</div>
        <div className={styles["path-content"]}>
          <div className={styles["path-title"]}>풀스택 프로젝트 완성</div>
          <div className={styles["path-description"]}>
            백엔드와 프론트엔드를 연결한 완전한 웹 애플리케이션 구축
          </div>
        </div>
      </div>
    </div>
  );
}
