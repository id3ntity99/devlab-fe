import { useMemo } from "react";
import styles from "./Pagination.module.css";

export default function Pagination({ totalPages = 1, hasNext }) {
  const pageNumbers = useMemo(
    () =>
      Array.from({ length: Math.max(1, totalPages) }, (_, index) => index + 1),
    [totalPages],
  );

  return (
    <div className={styles["pagination"]}>
      <button className={styles["page-btn"]} disabled>
        이전
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`${styles["page-btn"]} ${page === 1 ? styles["active"] : ""}`}
        >
          {page}
        </button>
      ))}
      {hasNext ? <button className={styles["page-btn"]}>다음</button> : null}
    </div>
  );
}
