import styles from "./KitFilter.module.css";

export default function KitFilter() {
  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["filter-group"]}>
        <h3 className={styles["filter-title"]}>카테고리</h3>
        <label className={styles["filter-option"]}>
          <input type="checkbox" defaultChecked />
          <span>전체</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>웹 개발 (324)</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>모바일 앱 (156)</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>데이터 사이언스 (89)</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>머신러닝 (123)</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>게임 개발 (67)</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>백엔드 (198)</span>
        </label>
      </div>

      <div className={styles["filter-group"]}>
        <h3 className={styles["filter-title"]}>난이도</h3>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>입문</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>중급</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>고급</span>
        </label>
      </div>

      <div className={styles["filter-group"]}>
        <h3 className={styles["filter-title"]}>가격</h3>
        <div className={styles["price-inputs"]}>
          <input
            type="number"
            className={styles["price-input"]}
            placeholder="최소"
          />
          <span style={{ color: "var(--text-muted)" }}>~</span>
          <input
            type="number"
            className={styles["price-input"]}
            placeholder="최대"
          />
        </div>
      </div>

      <div className={styles["filter-group"]}>
        <h3 className={styles["filter-title"]}>기술 스택</h3>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>React</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>Vue.js</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>Python</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>Node.js</span>
        </label>
        <label className={styles["filter-option"]}>
          <input type="checkbox" />
          <span>TensorFlow</span>
        </label>
      </div>
    </aside>
  );
}
