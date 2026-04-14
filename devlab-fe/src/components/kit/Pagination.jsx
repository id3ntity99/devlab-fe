import { useMemo } from "react";
import styles from "./Pagination.module.css";
import { useSearchParams } from "react-router-dom";

export default function Pagination({ totalPages, hasNext }) {
  const [searchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || "1"; // Default to page 1 if not present
  const pageNumbers = useMemo(
    () =>
      Array.from({ length: Math.max(1, totalPages) }, (_, index) => index + 1),
    [totalPages],
  );

  return (
    <div className={styles["pagination"]}>
      {currentPage === 1 ? null : (
        <button className={styles["page-btn"]}>이전</button>
      )}
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
