import styles from "./Header.module.css";

export default function Header({
  creatorNickname,
  learnerNum,
  lastModified,
  title,
}) {
  return (
    <div className={styles["kit-header"]}>
      <h1 className={styles["kit-title"]}>{title}</h1>
      <div className={styles["kit-meta"]}>
        <div className={styles["author-info"]}>
          <div className={styles["author-avatar"]}></div>
          <div className={styles["author-details"]}>
            <h4>{creatorNickname}</h4>
          </div>
        </div>
        {/* FIXME - Uncomment when rating system is implemented
        <div className={styles["rating-badge"]}>
          <span className={styles["stars"]}>★★★★★</span>
          <span className={styles["rating-text"]}>{rating}</span>
          <span className={styles["rating-count"]}>{kit.reviews}개 평가</span>
        </div>
            */}
        <div className={styles["stat-badge"]}>
          <span>👥</span>
          <span>{learnerNum.toLocaleString()}명 수강</span>
        </div>
        <div className={styles["stat-badge"]}>
          <span>🕐</span>
          <span>최근 업데이트: {lastModified}</span>
        </div>
      </div>
    </div>
  );
}
