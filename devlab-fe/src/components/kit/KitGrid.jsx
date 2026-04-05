import styles from "./KitGrid.module.css";
import { translate } from "./LevelDict.js";

export default function KitGrid({ kits }) {
  const handleCardClick = () => {
    // TODO: 카드 클릭 시 상세 페이지로 이동하는 로직을 구현
  };
  return (
    <div className={styles["kits-grid"]}>
      {kits.map((kit) => {
        return (
          <div
            key={kit.kitId}
            className={styles["kit-card"]}
            onClick={handleCardClick}
          >
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #FA709A, #FEE140)",
              }}
            >
              <div className={styles["kit-badge"]}>게임 개발</div>
              <div
                className={`${styles["difficulty-badge"]} ${styles["difficulty-beginner"]}`}
              >
                {translate(kit.level)}
              </div>
              🎮
            </div>
            <div className={styles["kit-body"]}>
              <h3 className={styles["kit-title"]}>{kit.title}</h3>
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
                {/*
                <div className={styles["stat-item"]}>
                  <span>⏱️</span>
                  <span>14시간</span>
                </div>
                */}
              </div>
              <div className={styles["kit-footer"]}>
                <div className={styles["kit-rating"]}>
                  {(() => {
                    const rating = Math.round(kit.rating);
                    const stars = [];
                    for (let i = 0; i < 5; i++) {
                      if (i < rating) {
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
                  })()}
                  {/*
                  <span className={styles["rating-count"]}>(412)</span>
                  */}
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>
                  {kit.price.toLocaleString("ko-KR")}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
