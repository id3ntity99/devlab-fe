import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles["hero"]}>
        <div className={styles["hero-container"]}>
          <div className={styles["hero-content"]}>
            <div className={styles["hero-badge"]}>🚀 새로운 학습 경험</div>
            <h1 className={styles["hero-title"]}>
              실전 프로젝트로
              <br />
              <span className={styles["gradient-text"]}>코딩 마스터하기</span>
            </h1>
            <p className={styles["hero-description"]}>
              전문 개발자들이 만든 프로젝트 기반 학습 킷을 구매하고 판매하세요.
              영상 강의가 아닌, 직접 만들며 배우는 진짜 학습을 경험하세요.
            </p>
            <div className={styles["hero-actions"]}>
              <a
                href="#explore"
                className={
                  styles["btn"] +
                  " " +
                  styles["btn-primary"] +
                  " " +
                  styles["btn-large"]
                }
              >
                킷 둘러보기
              </a>
              <a
                href="#create"
                className={
                  styles["btn"] +
                  " " +
                  styles["btn-outline"] +
                  " " +
                  styles["btn-large"]
                }
              >
                킷 판매하기
              </a>
            </div>
            <div className={styles["hero-stats"]}>
              <div className={styles["stat-item"]}>
                <div className={styles["stat-number"]}>2,500+</div>
                <div className={styles["stat-label"]}>프로젝트 킷</div>
              </div>
              <div className={styles["stat-item"]}>
                <div className={styles["stat-number"]}>50,000+</div>
                <div className={styles["stat-label"]}>수강생</div>
              </div>
              <div className={styles["stat-item"]}>
                <div className={styles["stat-number"]}>95%</div>
                <div className={styles["stat-label"]}>만족도</div>
              </div>
            </div>
          </div>
          <div className={styles["hero-visual"]}>
            <div className={styles["mockup-browser"]}>
              <div className={styles["browser-header"]}>
                <div className={styles["browser-dot"]}></div>
                <div className={styles["browser-dot"]}></div>
                <div className={styles["browser-dot"]}></div>
              </div>
              <div className={styles["browser-content"]}>
                <div className={styles["code-snippet"]}>
                  const learningPath = {"{"}
                  <br />
                  &nbsp;&nbsp;step1: "프로젝트 선택",
                  <br />
                  &nbsp;&nbsp;step2: "직접 구현",
                  <br />
                  &nbsp;&nbsp;step3: "실력 향상",
                  <br />
                  &nbsp;&nbsp;result: "취업 성공 ✨"
                  <br />
                  {"}"};
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
