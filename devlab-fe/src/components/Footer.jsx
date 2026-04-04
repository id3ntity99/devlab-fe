import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <footer className={styles["footer"]}>
        <div className={styles["footer-container"]}>
          <div className={styles["footer-top"]}>
            <div>
              <div className={styles["footer-brand"]}>DevLab</div>
              <p className={styles["footer-description"]}>
                프로젝트 기반 코딩 교육의 선두주자
                <br />
                실전으로 배우고, 경험으로 성장하세요
              </p>
              <div className={styles["footer-social"]}>
                <a href="#" className={styles["social-link"]}>
                  f
                </a>
                <a href="#" className={styles["social-link"]}>
                  T
                </a>
                <a href="#" className={styles["social-link"]}>
                  in
                </a>
                <a href="#" className={styles["social-link"]}>
                  Y
                </a>
              </div>
            </div>
            <div className={styles["footer-section"]}>
              <h4>플랫폼</h4>
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="#">킷 둘러보기</a>
                </li>
                <li>
                  <a href="#">킷 만들기</a>
                </li>
                <li>
                  <a href="#">요금제</a>
                </li>
                <li>
                  <a href="#">기업용</a>
                </li>
              </ul>
            </div>
            <div className={styles["footer-section"]}>
              <h4>지원</h4>
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="#">도움말 센터</a>
                </li>
                <li>
                  <a href="#">커뮤니티</a>
                </li>
                <li>
                  <a href="#">블로그</a>
                </li>
                <li>
                  <a href="#">문의하기</a>
                </li>
              </ul>
            </div>
            <div className={styles["footer-section"]}>
              <h4>회사</h4>
              <ul className={styles["footer-links"]}>
                <li>
                  <a href="#">회사 소개</a>
                </li>
                <li>
                  <a href="#">채용</a>
                </li>
                <li>
                  <a href="#">파트너십</a>
                </li>
                <li>
                  <a href="#">언론 보도</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles["footer-bottom"]}>
            <div className={styles["footer-copyright"]}>
              <span>© 2026 DevLab. All rights reserved.</span>
              <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
                이용약관
              </a>
              <a href="#" style={{ color: "#6b7280", textDecoration: "none" }}>
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
