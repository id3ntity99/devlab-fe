import MyEditor from "../components/ide/MyEditor";
import FileBrowser from "../components/ide/FileBrowser";
import InstructionPanel from "../components/ide/InstructionPanel";
import NavBar from "../components/ide/NavBar";
import Terminal from "../components/ide/Terminal";
import NavigationBar from "../components/landing/Navigation";
import styles from "./Ide.module.css";

export default function Ide() {
  return (
    <>
      <NavBar />
      <div className={styles["main-layout"]}>
        <FileBrowser />
        <MyEditor />
        <aside className={styles["right-sidebar"]}>
          <InstructionPanel />
          <Terminal />
        </aside>
        <div className={styles["bottom-bar"]}>
          <div className={styles["status-items"]}>
            <div className={styles["status-item"]}>
              <div className={styles["status-dot"]}></div>
              <span>서버 실행 중</span>
            </div>
            <div className={styles["status-item"]}>
              <span>UTF-8</span>
            </div>
            <div className={styles["status-item"]}>
              <span>JavaScript JSX</span>
            </div>
          </div>
          <div className={styles["status-items"]}>
            <div className={styles["status-item"]}>
              <span>Ln 11, Col 22</span>
            </div>
            <div className={styles["status-item"]}>
              <span>Spaces: 2</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
