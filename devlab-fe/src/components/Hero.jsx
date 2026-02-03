import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">🚀 새로운 학습 경험</div>
            <h1 className="hero-title">
              실전 프로젝트로
              <br />
              <span className="gradient-text">코딩 마스터하기</span>
            </h1>
            <p className="hero-description">
              전문 개발자들이 만든 프로젝트 기반 학습 킷을 구매하고 판매하세요.
              영상 강의가 아닌, 직접 만들며 배우는 진짜 학습을 경험하세요.
            </p>
            <div className="hero-actions">
              <a href="#explore" className="btn btn-primary btn-large">
                킷 둘러보기
              </a>
              <a href="#create" className="btn btn-outline btn-large">
                킷 판매하기
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2,500+</div>
                <div className="stat-label">프로젝트 킷</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">수강생</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">만족도</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mockup-browser">
              <div className="browser-header">
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
                <div className="browser-dot"></div>
              </div>
              <div className="browser-content">
                <div className="code-snippet">
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
