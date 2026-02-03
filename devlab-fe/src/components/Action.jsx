import "./Action.css";

export default function Action() {
  return (
    <>
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">지금 바로 시작하세요</h2>
          <p className="cta-description">
            2,500개 이상의 프로젝트 킷이 여러분을 기다리고 있습니다.
            <br />
            오늘부터 실전 프로젝트로 실력을 키워보세요.
          </p>
          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center" }}
          >
            <a href="#signup" className="btn btn-white btn-large">
              무료로 시작하기
            </a>
            <a href="#explore" className="btn btn-white btn-large">
              킷 둘러보기
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
