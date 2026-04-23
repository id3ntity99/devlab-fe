import styles from "./FileBrowser.module.css";

export default function FileBrowser() {
  return (
    <aside className={styles["sidebar"]}>
      <div className={styles["sidebar-header"]}>프로젝트 파일</div>
      <div className={styles["file-tree"]}>
        <div className={styles["folder-item"]}>📁 chat-app</div>
        <div className={styles["folder-children"]}>
          <div className={styles["folder-item"]}>📁 client</div>
          <div className={styles["folder-children"]}>
            <div className={styles["folder-item"]}>📁 src</div>
            <div className={styles["folder-children"]}>
              <div className={`${styles["file-item"]} ${styles["active"]}`}>
                📄 App.jsx
              </div>
              <div className={styles["file-item"]}>📄 ChatRoom.jsx</div>
              <div className={styles["file-item"]}>📄 MessageList.jsx</div>
              <div className={styles["file-item"]}>📄 index.css</div>
            </div>
            <div className={styles["file-item"]}>📄 package.json</div>
          </div>
          <div className={styles["folder-item"]}>📁 server</div>
          <div className={styles["folder-children"]}>
            <div className={styles["file-item"]}>📄 index.js</div>
            <div className={styles["file-item"]}>📄 socketHandler.js</div>
            <div className={styles["file-item"]}>📄 package.json</div>
          </div>
          <div className={styles["file-item"]}>📄 README.md</div>
          <div className={styles["file-item"]}>📄 .gitignore</div>
        </div>
      </div>
    </aside>
  );
}
