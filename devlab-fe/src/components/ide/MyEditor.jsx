import styles from "./MyEditor.module.css";
import Editor from "@monaco-editor/react";

export default function MyEditor() {
  return (
    <div className={styles["editor-area"]}>
      <div className={styles["editor-container"]}>
        <Editor className={styles["code-editor"]} defaultLanguage="text" />
      </div>
    </div>
  );
}
