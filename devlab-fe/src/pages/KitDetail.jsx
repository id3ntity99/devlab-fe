import { Link, useParams } from "react-router-dom";
import NavigationBar from "../components/Navigation";
import styles from "./KitDetail.module.css";

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

      <main className={styles["detail-container"]}>
        <div className={styles["content-grid"]}>
          <section className={styles["main-content"]}>
            <div className={styles["kit-hero"]}>📦</div>
            <div className={styles["kit-header"]}>
              <h1 className={styles["kit-title"]}>{kit.title}</h1>
              <div className={styles["kit-meta"]}>
                {kit.category} · {kit.meta}
              </div>
            </div>

            <div className={styles["tabs"]}>
              <a
                className={styles["tab"] + " " + styles["active"]}
                href="#overview"
              >
                개요
              </a>
              <a className={styles["tab"]} href="#curriculum">
                커리큘럼
              </a>
              <a className={styles["tab"]} href="#reviews">
                리뷰
              </a>
            </div>

            <section id="overview" className={styles["section"]}>
              <h2>프로젝트 내용</h2>
              <p>
                실시간 채팅 앱을 만들며 백엔드 소켓, 프론트 상태관리, 디자인
                시스템을 함께 완성합니다.
              </p>
            </section>

            <section className={styles["section"]} id={styles["curriculum"]}>
              <h3>학습 목표</h3>
              <ul>
                {kit.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section className={styles["section"]} id={styles["reviews"]}>
              <h3>리뷰</h3>
              <article className={styles["review-card"]}>
                <p className={styles["reviewer-name"]}>홍길동</p>
                <p>{kit.reviews}개의 리뷰</p>
              </article>
            </section>
          </section>

          <aside className={styles["sidebar"]}>
            <div className={styles["purchase-card"]}>
              <div className={styles["price-section"]}>
                <div className={styles["current-price"]}>{kit.price}</div>
                <div className={styles["original-price"]}>
                  {kit.originalPrice}
                </div>
                <div className={styles["discount-badge"]}>40% OFF</div>
              </div>
              <button className={styles["btn"] + " " + styles["btn-primary"]}>
                지금 등록하기
              </button>
              <button className={styles["btn"] + " " + styles["btn-outline"]}>
                찜하기
              </button>
              <ul className={styles["includes-list"]}>
                {kit.includes.map((item) => (
                  <li key={item} className={styles["includes-item"]}>
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles["info-card"]}>
              <div className={styles["info-item"]}>
                <span className={styles["info-label"]}>수준</span>
                <span className={styles["info-value"]}>중급</span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles["info-label"]}>평점</span>
                <span className={styles["info-value"]}>
                  {kit.rating} ({kit.reviews}개)
                </span>
              </div>
              <div className={styles["info-item"]}>
                <span className={styles["info-label"]}>카테고리</span>
                <span className={styles["info-value"]}>{kit.category}</span>
              </div>
            </div>

            <Link
              to="/explore"
              className={styles["btn"] + " " + styles["btn-white"]}
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
