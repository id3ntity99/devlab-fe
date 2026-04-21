import NavigationBar from "../components/landing/Navigation";
import styles from "./Ide.module.css";

export default function Ide() {
  return (
    <div className={styles["ide-page"]}>
      <NavigationBar />
      <div className={styles["ide-layout"]}>
        <aside className={styles["sidebar"]}>
          <div className={styles["sidebar-header"]}>Explorer</div>
          <ul className={styles["file-tree"]}>
            <li className={styles["folder-item"]}>
              src
              <ul className={styles["folder-children"]}>
                <li className={styles["file-item"] + " " + styles["active"]}>
                  App.jsx
                </li>
                <li className={styles["file-item"]}>styles.css</li>
                <li className={styles["file-item"]}>main.jsx</li>
              </ul>
            </li>
            <li className={styles["file-item"]}>package.json</li>
            <li className={styles["file-item"]}>vite.config.js</li>
          </ul>
        </aside>

        <section className={styles["editor-area"]}>
          <div className={styles["tabs-bar"]}>
            <div className={styles["editor-tab"] + " " + styles["active"]}>
              App.jsx
            </div>
            <div className={styles["editor-tab"]}>Login.jsx</div>
          </div>
          <div className={styles["editor-container"]}>
            <div className={styles["line-numbers"]}>
              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
            </div>
            <textarea
              className={styles["code-editor"]}
              spellCheck="false"
              value={`import React from 'react';\n\nfunction App() {\n  return <div>Hello DevLab IDE</div>;\n}\n\nexport default App;`}
              readOnly
            />
          </div>
        </section>

        <aside className={styles["right-sidebar"]}>
          <div className={styles["instruction-panel"]}>
            <div className={styles["instruction-header"]}>
              <div className={styles["instruction-title"]}>작업 흐름</div>
              <span className={styles["progress-badge"]}>진행중</span>
            </div>
            <div className={styles["step-card"]}>
              <div className={styles["step-header"]}>
                <div
                  className={styles["step-number"] + " " + styles["completed"]}
                >
                  1
                </div>
                <div className={styles["step-title"]}>킷 선택</div>
              </div>
              <div className={styles["step-content"]}>
                로그인 후 프로젝트 킷 탭에서 시작할 킷을 선택합니다.
              </div>
            </div>
            <div className={styles["step-card"]}>
              <div className={styles["step-header"]}>
                <div className={styles["step-number"]}>2</div>
                <div className={styles["step-title"]}>에디터 열기</div>
              </div>
              <div className={styles["step-content"]}>
                코드 에디터에서 모듈을 수정하고 실시간 업데이트를 확인합니다.
              </div>
            </div>
          </div>
          <div className={styles["terminal-panel"]}>
            <div className={styles["terminal-header"]}>
              <div className={styles["terminal-title"]}>터미널</div>
              <button className={styles["btn"] + " " + styles["btn-text"]}>
                청소
              </button>
            </div>
            <div className={styles["terminal-content"]}>
              <div
                className={styles["terminal-line"] + " " + styles["success"]}
              >
                [15:12:05] 빌드 성공
              </div>
              <div className={styles["terminal-line"]}>npm run dev</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
