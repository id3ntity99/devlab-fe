import styles from "./MyEditor.module.css";
import Editor from "@monaco-editor/react";

export default function MyEditor() {
  return (
    <div className={styles["editor-area"]}>
      <div className={styles["editor-container"]}>
        <Editor
          className={styles["code-editor"]}
          defaultLanguage="java"
          defaultValue="public static void main(String[] args){\n}"
        />
      </div>
    </div>
  );
}
