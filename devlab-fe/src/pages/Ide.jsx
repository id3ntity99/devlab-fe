import NavigationBar from "../components/Navigation";
import "./Ide.css";

export default function Ide() {
  return (
    <div className="ide-page">
      <NavigationBar />
      <div className="ide-layout">
        <aside className="sidebar">
          <div className="sidebar-header">Explorer</div>
          <ul className="file-tree">
            <li className="folder-item">
              src
              <ul className="folder-children">
                <li className="file-item active">App.jsx</li>
                <li className="file-item">styles.css</li>
                <li className="file-item">main.jsx</li>
              </ul>
            </li>
            <li className="file-item">package.json</li>
            <li className="file-item">vite.config.js</li>
          </ul>
        </aside>

        <section className="editor-area">
          <div className="tabs-bar">
            <div className="editor-tab active">App.jsx</div>
            <div className="editor-tab">Login.jsx</div>
          </div>
          <div className="editor-container">
            <div className="line-numbers">
              1<br />2<br />3<br />4<br />5<br />6<br />7<br />8
            </div>
            <textarea
              className="code-editor"
              spellCheck="false"
              value={`import React from 'react';\n\nfunction App() {\n  return <div>Hello DevLab IDE</div>;\n}\n\nexport default App;`}
              readOnly
            />
          </div>
        </section>

        <aside className="right-sidebar">
          <div className="instruction-panel">
            <div className="instruction-header">
              <div className="instruction-title">작업 흐름</div>
              <span className="progress-badge">진행중</span>
            </div>
            <div className="step-card">
              <div className="step-header">
                <div className="step-number completed">1</div>
                <div className="step-title">킷 선택</div>
              </div>
              <div className="step-content">
                로그인 후 프로젝트 킷 탭에서 시작할 킷을 선택합니다.
              </div>
            </div>
            <div className="step-card">
              <div className="step-header">
                <div className="step-number">2</div>
                <div className="step-title">에디터 열기</div>
              </div>
              <div className="step-content">
                코드 에디터에서 모듈을 수정하고 실시간 업데이트를 확인합니다.
              </div>
            </div>
          </div>
          <div className="terminal-panel">
            <div className="terminal-header">
              <div className="terminal-title">터미널</div>
              <button className="btn btn-text">청소</button>
            </div>
            <div className="terminal-content">
              <div className="terminal-line success">[15:12:05] 빌드 성공</div>
              <div className="terminal-line">npm run dev</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
