import styles from "./MyEditor.module.css";
import Editor from "@monaco-editor/react";
import { basename, languageFromPath } from "./fileTree";

export default function MyEditor({
  openTabs = [],
  activePath,
  files = {},
  onSelectTab,
  onCloseTab,
  onChangeContent,
}) {
  const activeFile = activePath ? files[activePath] : null;
  const language = activePath ? languageFromPath(activePath) : "plaintext";

  return (
    <div className={styles["editor-area"]}>
      <div className={styles["tabs-bar"]}>
        {openTabs.map((path) => (
          <div
            key={path}
            className={[
              styles["editor-tab"],
              path === activePath ? styles["active"] : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={() => onSelectTab?.(path)}
            title={path}
          >
            <span className={styles["tab-name"]}>{basename(path)}</span>
            {files[path]?.isReadOnly && (
              <span className={styles["tab-readonly"]} title="읽기 전용">
                🔒
              </span>
            )}
            <span
              className={styles["tab-close"]}
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab?.(path);
              }}
            >
              ×
            </span>
          </div>
        ))}
      </div>
      <div className={styles["editor-container"]}>
        {activePath && activeFile ? (
          <Editor
            key={activePath}
            path={activePath}
            language={language}
            value={activeFile.content}
            className="my-editor"
            onChange={(value) => {
              if (!activeFile.isReadOnly) {
                onChangeContent?.(activePath, value ?? "");
              }
            }}
            height="100%"
            width="100%"
            options={{
              readOnly: !!activeFile.isReadOnly,
              fontSize: 14,
              fontFamily: "JetBrains Mono, Consolas, monospace",
              minimap: { enabled: false },
              automaticLayout: true,
              tabSize: 2,
              scrollBeyondLastLine: false,
              wordWrap: "on",
            }}
            theme="vs-light"
          />
        ) : (
          <div className={styles["editor-empty"]}>
            <p>왼쪽에서 파일을 선택해 편집을 시작하세요.</p>
          </div>
        )}
      </div>
    </div>
  );
}
