import "./Hero.css";
export default function Hero() {
  return (
    <>
      <section class="hero">
        <div class="hero-container">
          <div class="hero-content">
            <div class="hero-badge">🚀 새로운 학습 경험</div>
            <h1 class="hero-title">
              실전 프로젝트로
              <br />
              <span class="gradient-text">코딩 마스터하기</span>
            </h1>
            <p class="hero-description">
              전문 개발자들이 만든 프로젝트 기반 학습 킷을 구매하고 판매하세요.
              영상 강의가 아닌, 직접 만들며 배우는 진짜 학습을 경험하세요.
            </p>
            <div class="hero-actions">
              <a href="#explore" class="btn btn-primary btn-large">
                킷 둘러보기
              </a>
              <a href="#create" class="btn btn-outline btn-large">
                킷 판매하기
              </a>
            </div>
            <div class="hero-stats">
              <div class="stat-item">
                <div class="stat-number">2,500+</div>
                <div class="stat-label">프로젝트 킷</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50,000+</div>
                <div class="stat-label">수강생</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">95%</div>
                <div class="stat-label">만족도</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="mockup-browser">
              <div class="browser-header">
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
                <div class="browser-dot"></div>
              </div>
              <div class="browser-content">
                <div class="code-snippet">
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
