import styles from "./DetailContent.module.css";

export default function DetailContent({ kit }) {
  return (
    <>
      <div className={styles["tabs"]}>
        <div className={`${styles["tab"]} ${styles["active"]}`}>개요</div>
        <div className={styles["tab"]}>커리큘럼</div>
        {/* TODO - Implement review section and lecturer section when API provides review and lecturer data
        <div className={styles["tab"]}>리뷰</div>
        <div className={styles["tab"]}>강사</div>
*/}
      </div>
      <div className={styles["section"]}>
        <h2 className={styles["section-title"]}>프로젝트 소개</h2>
        <div className={styles["section-content"]}>
          <p>{kit.introduction}</p>
        </div>
      </div>

      <div className={styles["section"]}>
        <h2 className={styles["section-title"]}>학습 내용</h2>
        <div className={styles["section-content"]}>
          <ul>
            {kit.learningContents.map((content, index) => (
              <li key={index}>{content}</li>
            ))}
          </ul>
          {/* FIXME - Use list of learning contents when API provides it as an array
          <ul>
            <li>WebSocket과 Socket.io를 활용한 실시간 통신 구현</li>
            <li>JWT를 활용한 사용자 인증 시스템 구축</li>
            <li>React Hooks를 활용한 상태 관리</li>
            <li>MongoDB를 활용한 채팅 기록 저장</li>
            <li>파일 업로드 및 이미지 공유 기능</li>
            <li>읽음 표시 및 타이핑 인디케이터 구현</li>
            <li>반응형 UI 디자인</li>
            <li>Docker를 활용한 배포</li>
          </ul>
          */}
        </div>
      </div>

      <div className={styles["section"]}>
        <h2 className={styles["section-title"]}>사용 기술</h2>
        <div className={styles["tech-stack"]}>
          {(() => {
            return kit.stacks.map((tech, index) => (
              <div key={index} className={styles["tech-tag"]}>
                {tech}
              </div>
            ));
          })()}
        </div>
      </div>

      {/*TODO - Implement curriculum section if server returns problem data as an array */}
      <div className={styles["section"]}>
        <h2 className={styles["section-title"]}>커리큘럼</h2>
        <ul className={styles["curriculum-list"]}>
          {(() => {
            return kit.problems.map((problem, index) => (
              <li key={index} className={styles["curriculum-item"]}>
                <div className={styles["curriculum-header"]}>
                  <div className={styles["curriculum-title"]}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <span>{problem}</span>
                  </div>
                </div>
              </li>
            ));
          })()}
        </ul>
      </div>
    </>
  );
}
