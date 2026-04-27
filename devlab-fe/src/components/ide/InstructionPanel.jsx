import styles from "./InstructionPanel.module.css";

export default function InstructionPanel() {
  return (
    <div className={styles["instruction-panel"]}>
      <div className={styles["instruction-header"]}>
        <h3 className={styles["instruction-title"]}>학습 가이드</h3>
        <span className={styles["progress-badge"]}>3/7 완료</span>
      </div>

      <div className={styles["step-card"]}>
        <div className={styles["step-header"]}>
          <div className={`${styles["step-number"]} ${styles["completed"]}`}>
            1
          </div>
          <div className={styles["step-title"]}>프로젝트 초기 설정</div>
        </div>
        <div className={styles["step-content"]}>
          React 앱과 Express 서버를 초기화하고 필요한 패키지를 설치했습니다.
        </div>
      </div>

      <div className={styles["step-card"]}>
        <div className={styles["step-header"]}>
          <div className={`${styles["step-number"]} ${styles["completed"]}`}>
            2
          </div>
          <div className={styles["step-title"]}>Socket.io 설치</div>
        </div>
        <div className={styles["step-content"]}>
          클라이언트와 서버에 Socket.io를 설치하고 기본 설정을 완료했습니다.
        </div>
      </div>

      <div className={styles["step-card"]}>
        <div className={styles["step-header"]}>
          <div className={styles["step-number"]}>3</div>
          <div className={styles["step-title"]}>WebSocket 연결 구현</div>
        </div>
        <div className={styles["step-content"]}>
          <p>클라이언트에서 서버로 WebSocket 연결을 수립합니다.</p>
          <p style={{ marginTop: "8px" }}>
            <code>App.jsx</code> 파일에서 <code>socket.io-client</code>를
            사용하여 서버에 연결하세요.
          </p>
          <div className={styles["hint-box"]}>
            💡 힌트: useEffect 훅을 사용하여 컴포넌트 마운트 시 연결을
            생성하세요.
          </div>
        </div>
      </div>

      <div className={styles["step-card"]}>
        <div className={styles["step-header"]}>
          <div className={styles["step-number"]}>4</div>
          <div className={styles["step-title"]}>메시지 전송 기능</div>
        </div>
        <div className={styles["step-content"]}>
          사용자가 입력한 메시지를 서버로 전송하는 기능을 구현합니다.
        </div>
      </div>

      <div className={styles["step-card"]}>
        <div className={styles["step-header"]}>
          <div className={styles["step-number"]}>5</div>
          <div className={styles["step-title"]}>메시지 수신 기능</div>
        </div>
        <div className={styles["step-content"]}>
          서버로부터 메시지를 받아 화면에 표시하는 기능을 구현합니다.
        </div>
      </div>
    </div>
  );
}
