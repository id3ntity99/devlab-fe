import styles from "./KitGrid.module.css";
import { translate } from "./LevelDict.js";
import { generate } from "./GradientColorGenerator.js";
import { useNavigate } from "react-router-dom";

function renderStars(rating) {
  const roundedRating = Math.round(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(
        <span key={i} className={styles["star"]}>
          ★
        </span>,
      );
    } else {
      stars.push(
        <span key={i} className={styles["star"]}>
          ☆
        </span>,
      );
    }
  }
  return stars;
}

export default function KitGrid({ kits }) {
  const navigate = useNavigate();
  const handleCardClick = async (kitId) => {
    navigate(`/kits/${kitId}`);
  };
  return (
    <div className={styles["kits-grid"]}>
      {kits.map((kit) => {
        return (
          <div
            key={kit.kitId}
            className={styles["kit-card"]}
            onClick={() => handleCardClick(kit.kitId)}
          >
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: generate(),
              }}
            >
              <div className={styles["kit-badge"]}>{kit.categoryName}</div>
              <div
                className={`${styles["difficulty-badge"]} ${styles["difficulty-beginner"]}`}
              >
                {translate(kit.level)}
              </div>
            </div>
            <div className={styles["kit-body"]}>
              <h3 className={styles["kit-title"]}>
                {kit.title.length > 28
                  ? kit.title.substring(0, 28) + "..."
                  : kit.title}
              </h3>
              <div className={styles["kit-author"]}>
                <div className={styles["author-avatar"]}></div>
                <span className={styles["author-name"]}>
                  {kit.creatorNickname}
                </span>
              </div>
              <p className={styles["kit-description"]}>
                {kit.shortIntro.length > 100
                  ? kit.shortIntro.substring(0, 100) + "..."
                  : kit.shortIntro}
              </p>
              <div className={styles["kit-stats"]}>
                <div className={styles["stat-item"]}>
                  <span>👥</span>
                  <span>{kit.learnerNum}명 수강</span>
                </div>
                <div className={styles["stat-item"]}>
                  <span>⏱️</span>
                  <span>총 {kit.problemCount}문제</span>
                </div>
              </div>
              <div className={styles["kit-footer"]}>
                <div className={styles["kit-rating"]}>
                  {renderStars(kit.rating)}
                  {/*
                  <span className={styles["rating-count"]}>(412)</span>
                  */}
                </div>
                <div className={styles["kit-price"]}>
                  {kit.price === 0 ? null : (
                    <span className={styles["currency"]}>₩</span>
                  )}
                  {kit.price === 0 ? "무료" : kit.price.toLocaleString("ko-KR")}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
