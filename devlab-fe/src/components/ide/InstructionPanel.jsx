import styles from "./InstructionPanel.module.css";

export default function InstructionPanel({ problem }) {
  if (!problem) {
    return (
      <div className={styles["instruction-panel"]}>
        <div className={styles["empty"]}>문제를 불러오는 중...</div>
      </div>
    );
  }

  return (
    <div className={styles["instruction-panel"]}>
      <div className={styles["instruction-header"]}>
        <div>
          <div className={styles["step-label"]}>
            STEP {problem.stepNum ?? "-"}
          </div>
          <h3 className={styles["instruction-title"]}>{problem.title}</h3>
        </div>
        {problem.languageSupport && (
          <span className={styles["language-badge"]}>
            {problem.languageSupport}
          </span>
        )}
      </div>

      {problem.problemCode && (
        <div className={styles["problem-code"]}>{problem.problemCode}</div>
      )}

      <div className={styles["meta-row"]}>
        {problem.memoryLimit != null && (
          <div className={styles["meta-item"]}>
            <span className={styles["meta-label"]}>메모리</span>
            <span className={styles["meta-value"]}>
              {problem.memoryLimit} MB
            </span>
          </div>
        )}
        {problem.timeoutLimit != null && (
          <div className={styles["meta-item"]}>
            <span className={styles["meta-label"]}>제한 시간</span>
            <span className={styles["meta-value"]}>
              {problem.timeoutLimit} ms
            </span>
          </div>
        )}
      </div>

      <div className={styles["divider"]} />

      <div className={styles["section-title"]}>문제 설명</div>
      <div className={styles["content"]}>
        {(problem.content || "").split(/\r?\n/).map((line, i) => (
          <p key={i}>{line || " "}</p>
        ))}
      </div>
    </div>
  );
}
