import MyEditor from "../components/ide/MyEditor";
import FileBrowser from "../components/ide/FileBrowser";
import InstructionPanel from "../components/ide/InstructionPanel";
import NavBar from "../components/ide/NavBar";
import Terminal from "../components/ide/Terminal";
import NavigationBar from "../components/landing/Navigation";
import styles from "./Ide.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Ide() {
  const { kitId } = useParams();
  const [problemData, setProblemData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/v1/kits/${kitId}/workspace`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.status === 200) {
          setProblemData(response.data);
        }
      })
      .catch((error) => {
        alert(error.response.data.title);
      });
  }, [kitId]);
  return (
    <>
      <NavBar
        title={problemData.currentProblem.title}
        stepNum={problemData.currentProblem.stepNum}
      />
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
