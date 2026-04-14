import styles from "./Sidebar.module.css";
import { translate, translateLanguage } from "../LevelDict";

export default function Sidebar({ kit }) {
  const originalPrice = kit.price;
  const saleRate = kit.saleRate;
  const currentPrice = Math.round(originalPrice * (1 - saleRate));
  const onSale = saleRate > 0;
  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["purchase-card"]}>
        <div className={styles["price-section"]}>
          <div>
            <span className={styles["current-price"]}>
              <span className={styles["currency"]}>₩</span>
              {currentPrice.toLocaleString()}
            </span>

            {onSale && (
              <span className={styles["original-price"]}>
                {kit.price.toLocaleString()}
              </span>
            )}
          </div>
          {onSale && (
            <span className={styles["sale-rate"]}>{saleRate * 100}% 할인</span>
          )}
        </div>

        <button
          className={`${styles["btn"]} ${styles["btn-primary"]} ${styles["btn-large"]}`}
        >
          지금 시작하기
        </button>
        {/* FIXME - Uncomment when cart functionality is ready 
        <button
          className={`${styles["btn"]}
                  ${styles["btn-outline"]}
                  ${styles["btn-large"]}`}
        >
          장바구니 담기
        </button>
*/}
        {/* FIXME - Uncomment when includes list is ready 
        <ul className={styles["includes-list"]}>
          <li className={styles["includes-item"]}>
            <span className={styles["check-icon"]}>✓</span>
            <span>총 12시간 분량의 프로젝트</span>
          </li>
          <li className={styles["includes-item"]}>
            <span className={styles["check-icon"]}>✓</span>
            <span>완성 코드 및 자료 제공</span>
          </li>
          <li className={styles["includes-item"]}>
            <span className={styles["check-icon"]}>✓</span>
            <span>Q&A 게시판 이용</span>
          </li>
          <li className={styles["includes-item"]}>
            <span className={styles["check-icon"]}>✓</span>
            <span>수료증 발급</span>
          </li>
          <li className={styles["includes-item"]}>
            <span className={styles["check-icon"]}>✓</span>
            <span>평생 소장</span>
          </li>
        </ul>
        */}
      </div>

      <div className={styles["info-card"]}>
        <h3 className={styles["info-title"]}>프로젝트 정보</h3>
        <div className={styles["info-item"]}>
          <span className={styles["info-label"]}>난이도</span>
          <span className={styles["info-value"]}>{translate(kit.level)}</span>
        </div>
        <div className={styles["info-item"]}>
          <span className={styles["info-label"]}>문제 수</span>
          <span className={styles["info-value"]}>{kit.problemCount}개</span>
        </div>
        <div className={styles["info-item"]}>
          <span className={styles["info-label"]}>언어</span>
          <span className={styles["info-value"]}>
            {translateLanguage(kit.language)}
          </span>
        </div>
        <div className={styles["info-item"]}>
          <span className={styles["info-label"]}>최종 업데이트</span>
          <span className={styles["info-value"]}>{kit.lastUpdate}</span>
        </div>
      </div>
    </aside>
  );
}
