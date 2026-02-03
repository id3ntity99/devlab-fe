import "./Features.css";

export default function Features() {
  return (
    <section
      className="section"
      style={{
        background: "var(--gray-50)",
        margin: "0 auto",
        padding: "80px 24px",
      }}
    >
      <div className="why-container">
        <div className="section-header">
          <div className="section-badge">WHY DEVLAB</div>
          <h2 className="section-title">왜 DevLab인가요?</h2>
          <p className="section-description">
            프로젝트 기반 학습으로 실무 역량을 키우세요
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">💡</div>
            <h3 className="feature-title">실전 중심 학습</h3>
            <p className="feature-description">
              이론만 배우는 것이 아닌, 실제 프로젝트를 직접 만들며 배웁니다.
              포트폴리오도 자연스럽게 완성됩니다.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">검증된 크리에이터</h3>
            <p className="feature-description">
              현직 개발자와 전문가들이 만든 고퀄리티 프로젝트 킷으로 확실한 학습
              효과를 보장합니다.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3 className="feature-title">커리어 성장</h3>
            <p className="feature-description">
              완성한 프로젝트는 당신의 포트폴리오가 되어 취업과 이직에 큰 도움이
              됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
