import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [nickname, setNickname] = useState("");

  useEffect(() => {}, []);
  axios
    .get("http://localhost:8080/api/v1/dashboard", { withCredentials: true })
    .then((response) => {
      if (response.status === 200) {
        const nickname = response.data.nickname;
        setNickname(nickname);
      }
    });
  return (
    <>
      <nav>
        <div className={styles["nav-container"]}>
          <div className={styles["logo"]}>DevLab</div>
          <div className={styles["nav-center"]}>
            <a
              href="#dashboard"
              className={`${styles["nav-link"]} ${styles["active"]}`}
            >
              대시보드
            </a>
            <a href="#my-kits" className={styles["nav-link"]}>
              내 학습
            </a>
            <a href="#explore" className={styles["nav-link"]}>
              킷 둘러보기
            </a>
            <a href="#community" className={styles["nav-link"]}>
              커뮤니티
            </a>
          </div>
          <div className={styles["nav-right"]}>
            <button className={styles["notification-btn"]}>
              🔔
              <span className={styles["notification-badge"]}>3</span>
            </button>
            <div className={styles["user-menu"]}>
              <div className={styles["user-avatar"]}></div>
              <span className={styles["user-name"]}>{nickname}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className={styles["main-container"]}>
        <div className={styles["welcome-section"]}>
          <div className={styles["welcome-content"]}>
            <h1 className={styles["welcome-title"]}>
              안녕하세요, {nickname}님! 👋
            </h1>
            <p className={styles["welcome-subtitle"]}>
              오늘도 새로운 프로젝트로 실력을 키워보세요
            </p>

            <div className={styles["welcome-stats"]}>
              <div className={styles["welcome-stat"]}>
                <div className={styles["stat-label"]}>진행 중인 프로젝트</div>
                <div className={styles["stat-value"]}>3</div>
              </div>
              <div className={styles["welcome-stat"]}>
                <div className={styles["stat-label"]}>완료한 프로젝트</div>
                <div className={styles["stat-value"]}>12</div>
              </div>
              <div className={styles["welcome-stat"]}>
                <div className={styles["stat-label"]}>총 학습 시간</div>
                <div className={styles["stat-value"]}>147h</div>
              </div>
              <div className={styles["welcome-stat"]}>
                <div className={styles["stat-label"]}>획득한 배지</div>
                <div className={styles["stat-value"]}>8</div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["quick-actions"]}>
          <div className={styles["action-card"]}>
            <div className={styles["action-icon"]}>🚀</div>
            <div className={styles["action-title"]}>새 프로젝트 시작</div>
            <div className={styles["action-subtitle"]}>킷 둘러보기</div>
          </div>
          <div className={styles["action-card"]}>
            <div className={styles["action-icon"]}>📚</div>
            <div className={styles["action-title"]}>학습 계속하기</div>
            <div className={styles["action-subtitle"]}>진행 중인 프로젝트</div>
          </div>
          <div className={styles["action-card"]}>
            <div className={styles["action-icon"]}>🎯</div>
            <div className={styles["action-title"]}>학습 목표 설정</div>
            <div className={styles["action-subtitle"]}>계획 세우기</div>
          </div>
          <div className={styles["action-card"]}>
            <div className={styles["action-icon"]}>💬</div>
            <div className={styles["action-title"]}>커뮤니티</div>
            <div className={styles["action-subtitle"]}>질문하고 공유하기</div>
          </div>
        </div>

        <div className={styles["content-grid"]}>
          <div>
            <div
              className={styles["section-card"]}
              style={{ marginBottom: "24px" }}
            >
              <div className={styles["section-header"]}>
                <h2 className={styles["section-title"]}>진행 중인 프로젝트</h2>
                <a href="#" className={styles["view-all-link"]}>
                  전체 보기 →
                </a>
              </div>

              <div className={styles["kit-item"]}>
                <div
                  className={styles["kit-thumbnail"]}
                  style={{
                    background: "linear-gradient(135deg, #667EEA, #764BA2)",
                  }}
                >
                  🚀
                </div>
                <div className={styles["kit-info"]}>
                  <div className={styles["kit-title"]}>
                    실시간 채팅 앱 만들기
                  </div>
                  <div className={styles["kit-meta"]}>
                    웹 개발 · 김개발 강사
                  </div>
                  <div className={styles["progress-bar"]}>
                    <div
                      className={styles["progress-fill"]}
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                  <div className={styles["progress-text"]}>
                    65% 완료 (8/12 레슨)
                  </div>
                </div>
              </div>

              <div className={styles["kit-item"]}>
                <div
                  className={styles["kit-thumbnail"]}
                  style={{
                    background: "linear-gradient(135deg, #F093FB, #F5576C)",
                  }}
                >
                  📱
                </div>
                <div className={styles["kit-info"]}>
                  <div className={styles["kit-title"]}>iOS 피트니스 트래커</div>
                  <div className={styles["kit-meta"]}>
                    모바일 앱 · 박앱개발 강사
                  </div>
                  <div className={styles["progress-bar"]}>
                    <div
                      className={styles["progress-fill"]}
                      style={{ width: "35%" }}
                    ></div>
                  </div>
                  <div className={styles["progress-text"]}>
                    35% 완료 (5/14 레슨)
                  </div>
                </div>
              </div>

              <div className={styles["kit-item"]}>
                <div
                  className={styles["kit-thumbnail"]}
                  style={{
                    background: "linear-gradient(135deg, #4FACFE, #00F2FE)",
                  }}
                >
                  🤖
                </div>
                <div className={styles["kit-info"]}>
                  <div className={styles["kit-title"]}>이미지 분류 ML 모델</div>
                  <div className={styles["kit-meta"]}>
                    머신러닝 · 이데이터 강사
                  </div>
                  <div className={styles["progress-bar"]}>
                    <div
                      className={styles["progress-fill"]}
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                  <div className={styles["progress-text"]}>
                    20% 완료 (3/15 레슨)
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["section-card"]}>
              <div className={styles["section-header"]}>
                <h2 className={styles["section-title"]}>추천 학습 경로</h2>
                <a href="#" className={styles["view-all-link"]}>
                  더보기 →
                </a>
              </div>

              <div className={styles["path-item"]}>
                <div
                  className={styles["path-step"]}
                  style={{ backgroundColor: "#4CAF50" }}
                >
                  ✓
                </div>
                <div className={styles["path-content"]}>
                  <div className={styles["path-title"]}>
                    JavaScript 기초 마스터
                  </div>
                  <div className={styles["path-description"]}>
                    변수, 함수, 객체 등 JavaScript 기본 개념 학습
                  </div>
                  <span className={styles["path-status"]}>완료</span>
                </div>
              </div>

              <div className={styles["path-item"]}>
                <div className={styles["path-step"]}>2</div>
                <div className={styles["path-content"]}>
                  <div className={styles["path-title"]}>React 시작하기</div>
                  <div className={styles["path-description"]}>
                    컴포넌트, Props, State를 활용한 인터랙티브 UI 개발
                  </div>
                  <span
                    className={styles["path-status"]}
                    style={{ backgroundColor: "#FFC107" }}
                  >
                    진행 중
                  </span>
                </div>
              </div>

              <div className={styles["path-item"]}>
                <div className={styles["path-step"]}>3</div>
                <div className={styles["path-content"]}>
                  <div className={styles["path-title"]}>
                    풀스택 프로젝트 완성
                  </div>
                  <div className={styles["path-description"]}>
                    백엔드와 프론트엔드를 연결한 완전한 웹 애플리케이션 구축
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className={styles["section-card"]}
              style={{ marginBottom: "24px" }}
            >
              <div className={styles["section-header"]}>
                <h2 className={styles["section-title"]}>최근 활동</h2>
              </div>

              <div className={styles["activity-item"]}>
                <div className={styles["activity-icon"]}>✅</div>
                <div className={styles["activity-content"]}>
                  <div className={styles["activity-title"]}>레슨 완료</div>
                  <div className={styles["activity-description"]}>
                    WebSocket 연결 구현
                  </div>
                </div>
                <div className={styles["activity-time"]}>2시간 전</div>
              </div>

              <div className={styles["activity-item"]}>
                <div className={styles["activity-icon"]}>🏆</div>
                <div className={styles["activity-content"]}>
                  <div className={styles["activity-title"]}>배지 획득</div>
                  <div className={styles["activity-description"]}>
                    첫 프로젝트 완성
                  </div>
                </div>
                <div className={styles["activity-time"]}>1일 전</div>
              </div>

              <div className={styles["activity-item"]}>
                <div className={styles["activity-icon"]}>💬</div>
                <div className={styles["activity-content"]}>
                  <div className={styles["activity-title"]}>댓글 작성</div>
                  <div className={styles["activity-description"]}>
                    커뮤니티 Q&A
                  </div>
                </div>
                <div className={styles["activity-time"]}>2일 전</div>
              </div>

              <div className={styles["activity-item"]}>
                <div className={styles["activity-icon"]}>📚</div>
                <div className={styles["activity-content"]}>
                  <div className={styles["activity-title"]}>새 킷 구매</div>
                  <div className={styles["activity-description"]}>
                    이미지 분류 ML 모델
                  </div>
                </div>
                <div className={styles["activity-time"]}>3일 전</div>
              </div>
            </div>

            <div
              className={styles["section-card"]}
              style={{ marginBottom: "24px" }}
            >
              <div className={styles["section-header"]}>
                <h2 className={styles["section-title"]}>최근 획득 배지</h2>
                <a href="#" className={styles["view-all-link"]}>
                  전체 보기 →
                </a>
              </div>

              <div className={styles["achievements-grid"]}>
                <div className={styles["achievement-card"]}>
                  <div className={styles["achievement-badge"]}>🏆</div>
                  <div className={styles["achievement-title"]}>첫 완성</div>
                  <div className={styles["achievement-description"]}>
                    첫 프로젝트 완료
                  </div>
                </div>
                <div className={styles["achievement-card"]}>
                  <div className={styles["achievement-badge"]}>🔥</div>
                  <div className={styles["achievement-title"]}>연속 학습</div>
                  <div className={styles["achievement-description"]}>
                    7일 연속
                  </div>
                </div>
                <div className={styles["achievement-card"]}>
                  <div className={styles["achievement-badge"]}>⭐</div>
                  <div className={styles["achievement-title"]}>빠른 학습자</div>
                  <div className={styles["achievement-description"]}>
                    1주일 완성
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["section-card"]}>
              <div className={styles["section-header"]}>
                <h2 className={styles["section-title"]}>추천 프로젝트</h2>
              </div>

              <div className={styles["recommendation-card"]}>
                <div
                  className={styles["recommendation-image"]}
                  style={{
                    background: "linear-gradient(135deg, #FA709A, #FEE140)",
                  }}
                >
                  🎮
                </div>
                <div className={styles["recommendation-content"]}>
                  <div className={styles["recommendation-title"]}>
                    Unity 2D 플랫포머
                  </div>
                  <div className={styles["recommendation-meta"]}>
                    <span className={styles["recommendation-rating"]}>
                      ★★★★★ 4.9
                    </span>
                    <span className={styles["recommendation-price"]}>
                      ₩55,000
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles["recommendation-card"]}>
                <div
                  className={styles["recommendation-image"]}
                  style={{
                    background: "linear-gradient(135deg, #30CFD0, #330867)",
                  }}
                >
                  📊
                </div>
                <div className={styles["recommendation-content"]}>
                  <div className={styles["recommendation-title"]}>
                    매출 분석 대시보드
                  </div>
                  <div className={styles["recommendation-meta"]}>
                    <span className={styles["recommendation-rating"]}>
                      ★★★★★ 4.8
                    </span>
                    <span className={styles["recommendation-price"]}>
                      ₩45,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
