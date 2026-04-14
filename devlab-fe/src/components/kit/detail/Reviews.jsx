import styles from "./Reviews.module.css";

export default function Reviews() {
  return (
    <>
      <div className={styles["section"]}>
        <h2 className={styles["section-title"]}>수강생 리뷰</h2>

        <div className={styles["review-card"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviewer-info"]}>
              <div className={styles["reviewer-avatar"]}></div>
              <div>
                <div className={styles["reviewer-name"]}>이준호</div>
                <div className={styles["review-date"]}>2주 전</div>
              </div>
            </div>
            <div className={styles["review-rating"]}>★★★★★</div>
          </div>
          <p className={styles["review-text"]}>
            실무에서 바로 써먹을 수 있는 내용들로 가득합니다. 특히 WebSocket
            구현 부분이 정말 자세하게 설명되어 있어서 이해하기 쉬웠어요.
            포트폴리오로도 활용할 수 있을 것 같습니다!
          </p>
        </div>

        <div className={styles["review-card"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviewer-info"]}>
              <div className={styles["reviewer-avatar"]}></div>
              <div>
                <div className={styles["reviewer-name"]}>박지은</div>
                <div className={styles["review-date"]}>1개월 전</div>
              </div>
            </div>
            <div className={styles["review-rating"]}>★★★★★</div>
          </div>
          <p className={styles["review-text"]}>
            강사님의 설명이 정말 명쾌합니다. 복잡할 수 있는 내용을 쉽게
            풀어주셔서 초보자도 충분히 따라할 수 있었어요. 완성된 프로젝트를
            면접에서 보여줬더니 좋은 반응을 얻었습니다!
          </p>
        </div>

        <div className={styles["review-card"]}>
          <div className={styles["review-header"]}>
            <div className={styles["reviewer-info"]}>
              <div className={styles["reviewer-avatar"]}></div>
              <div>
                <div className={styles["reviewer-name"]}>최민수</div>
                <div className={styles["review-date"]}>2개월 전</div>
              </div>
            </div>
            <div className={styles["review-rating"]}>★★★★★</div>
          </div>
          <p className={styles["review-text"]}>
            단순히 코드만 따라하는 게 아니라, 왜 이렇게 구현해야 하는지 개념부터
            확실하게 잡아주셔서 너무 좋았습니다. 다른 프로젝트에도 응용할 수
            있을 것 같아요.
          </p>
        </div>
      </div>
    </>
  );
}
