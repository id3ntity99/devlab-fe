import styles from "./Progress.module.css";
import { generate } from "../kit/GradientColorGenerator.js";

function calcuateProgress(completedLessons, totalLessons) {
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

export default function Progress({ projects }) {
  return (
    <div className={styles["section-card"]} style={{ marginBottom: "24px" }}>
      <div className={styles["section-header"]}>
        <h2 className={styles["section-title"]}>진행 중인 프로젝트</h2>
        {/*TODO: Uncomment this when the feature is ready 
        <a href="#" className={styles["view-all-link"]}>
          전체 보기 →
        </a>
        */}
      </div>
      {projects.length === 0 ? (
        <div className={styles["no-projects"]}>
          진행 중인 프로젝트가 없습니다.
        </div>
      ) : (
        projects.map((project, idx) => (
          <div key={idx} className={styles["kit-item"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: generate(),
              }}
            ></div>
            <div className={styles["kit-info"]}>
              <div className={styles["kit-title"]}>{project.title}</div>
              <div className={styles["kit-meta"]}>
                {project.category} · {project.creatorNickname}
              </div>
              <div className={styles["progress-bar"]}>
                <div
                  className={styles["progress-fill"]}
                  style={{
                    width: `${calcuateProgress(project.solvedProblemsCount, project.totalProblemsCount)}%`,
                  }}
                ></div>
              </div>
              <div className={styles["progress-text"]}>
                {calcuateProgress(
                  project.solvedProblemsCount,
                  project.totalProblemsCount,
                )}
                % 완료 ({project.solvedProblemsCount}/
                {project.totalProblemsCount} 단계)
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
