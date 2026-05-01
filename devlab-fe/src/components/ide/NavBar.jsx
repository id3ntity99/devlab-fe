import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({
  title,
  stepNum,
  isRunning = false,
  onRun,
  onSubmit,
}) {
  return (
    <div className={styles["top-bar"]}>
      <Link to="/" className={styles["logo"]}>
        DevLab IDE
      </Link>
      <div className={styles["project-info"]}>
        {title && (
          <span className={styles["project-title"]}>
            {stepNum != null ? `Step ${stepNum}: ` : ""}
            {title}
          </span>
        )}
      </div>
      <div className={styles["top-actions"]}>
        <button
          type="button"
          className={`${styles["btn"]} ${styles["btn-primary"]}`}
          onClick={onRun}
          disabled={isRunning}
        >
          {isRunning ? "⏳ 실행 중" : "▶ 실행"}
        </button>
        <button
          type="button"
          className={`${styles["btn"]} ${styles["btn-success"]}`}
          onClick={onSubmit}
          disabled={isRunning}
        >
          ✓ 제출하기
        </button>
      </div>
    </div>
  );
}
