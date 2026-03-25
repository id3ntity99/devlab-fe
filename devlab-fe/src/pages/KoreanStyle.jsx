import NavigationBar from "../components/Navigation";
import "./KoreanStyle.css";

export default function KoreanStyle() {
  return (
    <div className="korean-style-page">
      <NavigationBar />
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-badge">#프로그래밍 학습</span>
            <h1 className="hero-title">
              <span className="gradient-text">프로젝트 기반</span>으로 코딩을
              배우세요
            </h1>
            <p className="hero-description">
              실무가 필요한 기술을 바로 써먹는 형태로 배우고, 포트폴리오로
              완성하세요.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary">킷 둘러보기</button>
              <button className="btn btn-outline">무료 체험</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="mockup-browser">IDE 미리보기</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2 className="section-title">오늘 시작할 수 있는 인기 킷</h2>
          <p className="section-description">
            단계별 실습으로 빠르게 퍼포먼스를 올리는 한국형 커리큘럼
          </p>
        </div>
        <div className="kits-grid">
          <article className="kit-card">
            <div className="kit-thumbnail" />
            <div className="kit-body">
              <h3 className="kit-title">AI 챗봇 플랫폼</h3>
              <p className="kit-description">
                사용자 입력 기반 지능형 챗봇 구현
              </p>
            </div>
          </article>
          <article className="kit-card">
            <div className="kit-thumbnail" />
            <div className="kit-body">
              <h3 className="kit-title">포스트 연결 서비스</h3>
              <p className="kit-description">REST API + 인증 + 반응형 UI</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
