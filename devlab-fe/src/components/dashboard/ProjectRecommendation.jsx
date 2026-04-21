import styles from "./ProjectRecommendation.module.css";

export default function ProjectRecommendation() {
  return (
    <div className={styles["section-card"]}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>추천 프로젝트</h2>
      </div>

      <div className={styles["recommendation-card"]}>
        <div
          className={styles["recommendation-image"]}
          style={{
            background: "linear-gradient(135deg, #FA709A, #FEE140)",
          }}
        >
          🎮
        </div>
        <div className={styles["recommendation-content"]}>
          <div className={styles["recommendation-title"]}>
            Unity 2D 플랫포머
          </div>
          <div className={styles["recommendation-meta"]}>
            <span className={styles["recommendation-rating"]}>★★★★★ 4.9</span>
            <span className={styles["recommendation-price"]}>₩55,000</span>
          </div>
        </div>
      </div>

      <div className={styles["recommendation-card"]}>
        <div
          className={styles["recommendation-image"]}
          style={{
            background: "linear-gradient(135deg, #30CFD0, #330867)",
          }}
        >
          📊
        </div>
        <div className={styles["recommendation-content"]}>
          <div className={styles["recommendation-title"]}>
            매출 분석 대시보드
          </div>
          <div className={styles["recommendation-meta"]}>
            <span className={styles["recommendation-rating"]}>★★★★★ 4.8</span>
            <span className={styles["recommendation-price"]}>₩45,000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
