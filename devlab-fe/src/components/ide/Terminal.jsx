import styles from "./Terminal.module.css";

export default function Terminal() {
  return (
    <div className={styles["terminal-panel"]}>
      <div className={styles["terminal-header"]}>
        <span className={styles["terminal-title"]}>터미널</span>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            className={styles["btn-icon"]}
            style={{ width: "24px", height: "24px", fontSize: "14px" }}
          >
            🗑️
          </button>
          <button
            className={styles["btn-icon"]}
            style={{ width: "24px", height: "24px", fontSize: "14px" }}
          >
            ⟲
          </button>
        </div>
      </div>
      <div className={styles["terminal-content"]}>
        <div className={styles["terminal-line"]}>
          <span className={styles["terminal-prompt"]}>$ </span>npm install
          socket.io-client
        </div>
        <div
          className={styles[`${styles["terminal-line"]} ${styles["success"]}`]}
        >
          ✓ socket.io-client@4.5.4 installed
        </div>
        <div className={styles["terminal-line"]} style={{ marginTop: "12px" }}>
          <span className={styles["terminal-prompt"]}>$ </span>npm start
        </div>
        <div className={styles["terminal-line"]}>Compiled successfully!</div>
        <div
          className={styles[`${styles["terminal-line"]} ${styles["success"]}`]}
        >
          ✓ Local: http://localhost:3000
        </div>
        <div
          className={styles[`${styles["terminal-line"]} ${styles["success"]}`]}
        >
          ✓ Server: http://localhost:3001
        </div>
        <div
          className={styles["terminal-line"]}
          style={{ marginTop: "12px", color: "var(--text-primary)" }}
        >
          Waiting for file changes...
        </div>
      </div>
    </div>
  );
}
