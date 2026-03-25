import { Link } from "react-router-dom";
import NavigationBar from "../components/Navigation";
import "./KitList.css";

const kits = [
  {
    id: "chat-app",
    title: "실시간 채팅 앱 만들기",
    author: "DevLab Team",
    level: "중급",
    price: "₩29,900",
    rating: 4.8,
    reviews: 142,
    desc: "Socket.IO 기반 실시간 채팅, 상태 관리, 디자인 시스템까지 완성하는 실전 프로젝트",
  },
  {
    id: "ecommerce",
    title: "쇼핑몰 프론트엔드 구현",
    author: "DesignPro",
    level: "초급",
    price: "₩19,900",
    rating: 4.6,
    reviews: 90,
    desc: "React + Vite로 쇼핑몰 UX를 빠르게 완성하고 상태관리, 라우팅을 익히는 킷",
  },
  {
    id: "portfolio",
    title: "개인 포트폴리오 사이트",
    author: "Creator",
    level: "초급",
    price: "무료",
    rating: 4.9,
    reviews: 210,
    desc: "애니메이션과 반응형 레이아웃으로 매력적인 포트폴리오를 만드는 프로젝트",
  },
];

export default function KitList() {
  return (
    <div className="kit-list-page">
      <NavigationBar />

      <main className="main-container">
        <div className="breadcrumb">
          <Link to="/">홈</Link>
          <span>/</span>
          <span>프로젝트 킷</span>
        </div>

        <section className="kit-list-header">
          <h1>프로젝트 킷 탐색</h1>
          <p>검증된 전문가들이 만든 실전 프로젝트로 실력을 키우세요</p>
        </section>

        <div className="kits-grid">
          {kits.map((kit) => (
            <article key={kit.id} className="kit-card">
              <div className="kit-thumbnail">📦</div>
              <div className="kit-body">
                <h2 className="kit-title">{kit.title}</h2>
                <p className="kit-description">{kit.desc}</p>
                <div className="kit-meta">
                  <span className="author-name">{kit.author}</span>
                  <span className="difficulty-badge">{kit.level}</span>
                </div>
                <div className="kit-footer">
                  <span className="kit-price">{kit.price}</span>
                  <Link to={`/kit/${kit.id}`} className="btn btn-primary">
                    자세히 보기
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
