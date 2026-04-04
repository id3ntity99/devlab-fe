import styles from "./FeaturedKits.module.css";

export default function FeaturedKits() {
  return (
    <>
      <section className={styles["section"]}>
        <div className={styles["section-header"]}>
          <div className={styles["section-badge"]}>FEATURED KITS</div>
          <h2 className={styles["section-title"]}>인기 프로젝트 킷</h2>
          <p className={styles["section-description"]}>
            검증된 크리에이터들이 만든 고퀄리티 프로젝트 학습 킷을 만나보세요
          </p>
        </div>

        <div className={styles["category-tabs"]}>
          <button className={`${styles["category-tab"]} ${styles["active"]}`}>
            전체
          </button>
          <button className={styles["category-tab"]}>웹 개발</button>
          <button className={styles["category-tab"]}>모바일 앱</button>
          <button className={styles["category-tab"]}>데이터 사이언스</button>
          <button className={styles["category-tab"]}>머신러닝</button>
          <button className={styles["category-tab"]}>게임 개발</button>
          <button className={styles["category-tab"]}>백엔드</button>
        </div>

        <div className={styles["kits-grid"]}>
          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>웹 개발</div>
              🚀
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(324)</span>
              </div>
              <h3 className={styles["kit-title"]}>실시간 채팅 앱 만들기</h3>
              <p className={styles["kit-description"]}>
                WebSocket, Node.js, React를 활용해 실무급 실시간 채팅
                애플리케이션을 구현합니다
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>김개발</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>49,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>모바일 앱</div>
              📱
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(187)</span>
              </div>
              <h3 className={styles["kit-title"]}>iOS 피트니스 트래커</h3>
              <p className={styles["kit-description"]}>
                Swift와 HealthKit을 활용한 운동 기록 및 데이터 시각화 앱 개발
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>박앱개발</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>65,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>머신러닝</div>
              🤖
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(256)</span>
              </div>
              <h3 className={styles["kit-title"]}>이미지 분류 ML 모델</h3>
              <p className={styles["kit-description"]}>
                TensorFlow를 활용한 CNN 모델 구축부터 배포까지 전 과정 학습
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>이데이터</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>89,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>게임 개발</div>
              🎮
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(412)</span>
              </div>
              <h3 className={styles["kit-title"]}>Unity 2D 플랫포머 게임</h3>
              <p className={styles["kit-description"]}>
                Unity와 C#으로 만드는 완성도 높은 2D 플랫포머 게임 프로젝트
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>최게임</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>55,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>데이터 사이언스</div>
              📊
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(198)</span>
              </div>
              <h3 className={styles["kit-title"]}>매출 분석 대시보드</h3>
              <p className={styles["kit-description"]}>
                Python, Pandas, Plotly를 활용한 인터랙티브 데이터 분석 대시보드
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>정분석</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>45,000
                </div>
              </div>
            </div>
          </div>

          <div className={styles["kit-card"]}>
            <div
              className={styles["kit-thumbnail"]}
              style={{
                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
              }}
            >
              <div className={styles["kit-badge"]}>백엔드</div>
              🔐
            </div>
            <div className={styles["kit-body"]}>
              <div className={styles["kit-rating"]}>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["star"]}>★</span>
                <span className={styles["rating-count"]}>(289)</span>
              </div>
              <h3 className={styles["kit-title"]}>보안 REST API 구축</h3>
              <p className={styles["kit-description"]}>
                JWT 인증, Rate Limiting 등을 적용한 안전한 REST API 개발
              </p>
              <div className={styles["kit-meta"]}>
                <div className={styles["kit-author"]}>
                  <div className={styles["author-avatar"]}></div>
                  <span className={styles["author-name"]}>강백엔드</span>
                </div>
                <div className={styles["kit-price"]}>
                  <span className={styles["currency"]}>₩</span>59,000
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
