import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/Navigation";
import "./KitDetail.css";

const kitData = {
  "chat-app": {
    title: "실시간 채팅 앱 만들기",
    category: "프론트엔드",
    meta: "배포 + 실시간 통신 + UI",
    price: "₩29,900",
    originalPrice: "₩49,900",
    rating: 4.8,
    reviews: 142,
    features: [
      "Socket.IO 실시간 채팅 서버/클라이언트 구현",
      "React 상태관리 + 컴포넌트 설계",
      "테스트 및 접근성 고려 UI",
      "GitHub 배포 파이프라인 설정",
    ],
    includes: ["완성 코드", "튜토리얼 문서", "데모 영상", "코드 리뷰 가이드"],
  },
};

export default function KitDetail() {
  const { id } = useParams();
  const kit = kitData[id] || kitData["chat-app"];

  return (
    <div className="kit-detail-page">
      <NavigationBar />

      <main className="detail-container">
        <div className="content-grid">
          <section className="main-content">
            <div className="kit-hero">📦</div>
            <div className="kit-header">
              <h1 className="kit-title">{kit.title}</h1>
              <div className="kit-meta">
                {kit.category} · {kit.meta}
              </div>
            </div>

            <div className="tabs">
              <a className="tab active" href="#overview">
                개요
              </a>
              <a className="tab" href="#curriculum">
                커리큘럼
              </a>
              <a className="tab" href="#reviews">
                리뷰
              </a>
            </div>

            <section id="overview" className="section">
              <h2>프로젝트 내용</h2>
              <p>
                실시간 채팅 앱을 만들며 백엔드 소켓, 프론트 상태관리, 디자인
                시스템을 함께 완성합니다.
              </p>
            </section>

            <section className="section">
              <h3>학습 목표</h3>
              <ul>
                {kit.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className="section" id="reviews">
              <h3>리뷰</h3>
              <article className="review-card">
                <p className="reviewer-name">홍길동</p>
                <p>실무에서 바로 쓸 수 있는 구조를 배워서 너무 좋았어요.</p>
              </article>
            </section>
          </section>

          <aside className="sidebar">
            <div className="purchase-card">
              <div className="price-section">
                <div className="current-price">{kit.price}</div>
                <div className="original-price">{kit.originalPrice}</div>
                <div className="discount-badge">40% OFF</div>
              </div>
              <button className="btn btn-primary">지금 등록하기</button>
              <button className="btn btn-outline">찜하기</button>
              <ul className="includes-list">
                {kit.includes.map((item) => (
                  <li key={item} className="includes-item">
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-card">
              <div className="info-item">
                <span className="info-label">수준</span>
                <span className="info-value">중급</span>
              </div>
              <div className="info-item">
                <span className="info-label">평점</span>
                <span className="info-value">
                  {kit.rating} ({kit.reviews}개)
                </span>
              </div>
              <div className="info-item">
                <span className="info-label">카테고리</span>
                <span className="info-value">{kit.category}</span>
              </div>
            </div>

            <Link
              to="/explore"
              className="btn btn-white"
              style={{ display: "block", marginTop: "14px" }}
            >
              킷 목록으로 돌아가기
            </Link>
          </aside>
        </div>
      </main>
    </div>
  );
}
