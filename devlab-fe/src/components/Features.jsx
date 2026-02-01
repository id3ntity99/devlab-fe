export default function Features() {
  return (
    <>
      <section
        class="section"
        style="background: var(--gray-50); margin: 0 auto; padding: 80px 24px"
      >
        <div style="max-width: 1280px; margin: 0 auto">
          <div class="section-header">
            <div class="section-badge">WHY DEVLAB</div>
            <h2 class="section-title">왜 DevLab인가요?</h2>
            <p class="section-description">
              프로젝트 기반 학습으로 실무 역량을 키우세요
            </p>
          </div>

          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">💡</div>
              <h3 class="feature-title">실전 중심 학습</h3>
              <p class="feature-description">
                이론만 배우는 것이 아닌, 실제 프로젝트를 직접 만들며 배웁니다.
                포트폴리오도 자연스럽게 완성됩니다.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🎯</div>
              <h3 class="feature-title">검증된 크리에이터</h3>
              <p class="feature-description">
                현직 개발자와 전문가들이 만든 고퀄리티 프로젝트 킷으로 확실한
                학습 효과를 보장합니다.
              </p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">🚀</div>
              <h3 class="feature-title">커리어 성장</h3>
              <p class="feature-description">
                완성한 프로젝트는 당신의 포트폴리오가 되어 취업과 이직에 큰
                도움이 됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
