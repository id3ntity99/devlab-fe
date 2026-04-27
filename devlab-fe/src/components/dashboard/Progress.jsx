import styles from "./Progress.module.css";
import { generate } from "../kit/GradientColorGenerator.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function calcuateProgress(completedLessons, totalLessons) {
  if (totalLessons === 0) return 0;
  return Math.round((completedLessons / totalLessons) * 100);
}

export default function Progress({ projects }) {
  const navigate = useNavigate();

  async function handleClickProject(event) {
    const kitId = event.currentTarget.dataset.id;
    try {
      const response = await axios.post(
        `http://localhost:8080/api/v1/kits/${kitId}/workspace/init`,
        {},
        {
          withCredentials: true,
        },
      );

      // If the project user just clicked has already started or this is the first time
      if (response.status === 200) {
        navigate(`/kits/${kitId}/workspace`); //Navigate to the IDE page. Server will reject/start project initialization automatically
      }
    } catch (error) {
      if (error.response.status === 409) {
        // This means the server found that the user has already started the proejct.
        // Gracefully ignore the error and navigate to the IDE page.
        navigate(`/kits/${kitId}/workspace`);
      } else {
        alert(error.response.data["title"]);
      }
    }
  }
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
          <div
            key={idx}
            data-id={project.kitId}
            className={styles["kit-item"]}
            onClick={handleClickProject}
          >
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
