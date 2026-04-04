import { useState } from "react";
import styles from "./SignUp.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    letter: false,
    number: false,
    special: false,
  });
  const [passwordConfirmValid, setPasswordConfirmValid] = useState(false);
  const [termsAgreed, setTermsAgreed] = useState(false);

  const handleTermsChange = (e) => {
    setTermsAgreed(e.target.checked);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length >= 8) {
      setPasswordValidations((prev) => ({ ...prev, length: true }));
    }
    if (/[a-zA-Z]/.test(e.target.value)) {
      setPasswordValidations((prev) => ({ ...prev, letter: true }));
    }
    if (/\d/.test(e.target.value)) {
      setPasswordValidations((prev) => ({ ...prev, number: true }));
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(e.target.value)) {
      setPasswordValidations((prev) => ({ ...prev, special: true }));
    }
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    if (e.target.value === password) {
      setPasswordConfirmValid(true);
    } else {
      setPasswordConfirmValid(false);
    }
  };

  const requestSignUp = () => {
    axios
      .post("http://localhost:8080/api/v1/auth/signup", {
        name: name,
        nickname: nickname,
        username: id,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/login");
        }
      })
      .catch((error) => {
        alert(error.response.data.detail);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      passwordValidations.length &&
      passwordValidations.letter &&
      passwordValidations.number &&
      passwordValidations.special &&
      passwordConfirmValid &&
      termsAgreed
    ) {
      requestSignUp();
    } else {
      if (!termsAgreed) {
        alert("이용약관에 동의하셔야 회원가입이 가능합니다.");
        return;
      }
      alert(
        "비밀번호 요구사항을 모두 충족하고 비밀번호 확인이 일치하는지 확인해주세요.",
      );
    }
  };

  return (
    <section>
      <div className={styles["bg-decoration"]}>
        <div className={`${styles["circle"]} ${styles["circle-1"]}`}></div>
        <div className={`${styles["circle"]} ${styles["circle-2"]}`}></div>
        <div className={`${styles["circle"]} ${styles["circle-3"]}`}></div>
      </div>

      <div className={styles["signup-container"]}>
        <div className={styles["brand-side"]}>
          <div className={styles["logo"]}>DevLab</div>
          <h2 className={styles["brand-title"]}>
            프로젝트 하나로
            <br />
            개발자 경력 시작하기
          </h2>
          <p className={styles["brand-description"]}>
            이미 수많은 개발자들이 DevLab에서
            <br />
            실전 프로젝트를 완성하고 꿈을 이뤘습니다.
          </p>

          <div className={styles["stats-grid"]}>
            <div className={styles["stat-box"]}>
              <div className={styles["stat-number"]}>50K+</div>
              <div className={styles["stat-label"]}>활성 사용자</div>
            </div>
            <div className={styles["stat-box"]}>
              <div className={styles["stat-number"]}>2,500+</div>
              <div className={styles["stat-label"]}>프로젝트 킷</div>
            </div>
            <div className={styles["stat-box"]}>
              <div className={styles["stat-number"]}>95%</div>
              <div className={styles["stat-label"]}>수료율</div>
            </div>
            <div className={styles["stat-box"]}>
              <div className={styles["stat-number"]}>1,200+</div>
              <div className={styles["stat-label"]}>전문 강사</div>
            </div>
          </div>
        </div>

        <div className={styles["form-side"]}>
          <div className={styles["form-header"]}>
            <h1 className={styles["form-title"]}>회원가입</h1>
            <p className={styles["form-subtitle"]}>
              이미 계정이 있으신가요? <a href="#login">로그인</a>
            </p>
          </div>

          <div className={styles["steps-indicator"]}>
            <div className={`${styles["step-dot"]} ${styles["active"]}`}></div>
            <div className={styles["step-dot"]}></div>
            <div className={styles["step-dot"]}></div>
          </div>

          <div className={styles["social-signup"]}>
            <button className={styles["social-btn"]}>
              <span>G</span> Google로 시작
            </button>
            <button className={styles["social-btn"]}>
              <span>GH</span> GitHub로 시작
            </button>
          </div>

          <div className={styles["divider"]}>또는 이메일로 가입</div>

          <form>
            <div className={styles["form-row"]}>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  이름 <span className={styles["required"]}>*</span>
                </label>
                <input
                  type="text"
                  className={styles["form-input"]}
                  placeholder="홍길동"
                  value={name}
                  onChange={handleNameChange}
                  required
                />
              </div>
              <div className={styles["form-group"]}>
                <label className={styles["form-label"]}>
                  닉네임 <span className={styles["required"]}>*</span>
                </label>
                <input
                  type="text"
                  className={styles["form-input"]}
                  placeholder="devmaster"
                  value={nickname}
                  onChange={handleNicknameChange}
                  required
                />
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>
                아이디<span className={styles["required"]}>*</span>
              </label>
              <input
                type="text"
                className={styles["form-input"]}
                placeholder="yourid"
                value={id}
                onChange={handleIdChange}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>
                비밀번호 <span className={styles["required"]}>*</span>
              </label>
              <input
                type="password"
                className={styles["form-input"]}
                placeholder="8자 이상 입력해주세요"
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <div className={styles["password-requirements"]}>
                <div
                  className={
                    passwordValidations.length
                      ? `${styles["requirement"]} ${styles["met"]}`
                      : styles["requirement"]
                  }
                >
                  <span className={styles["requirement-icon"]}>
                    {passwordValidations.length ? "✓" : "○"}
                  </span>
                  <span>8자 이상</span>
                </div>
                <div
                  className={
                    passwordValidations.letter
                      ? `${styles["requirement"]} ${styles["met"]}`
                      : styles["requirement"]
                  }
                >
                  <span className={styles["requirement-icon"]}>
                    {passwordValidations.letter ? "✓" : "○"}
                  </span>
                  <span>영문 포함</span>
                </div>
                <div
                  className={
                    passwordValidations.number
                      ? `${styles["requirement"]} ${styles["met"]}`
                      : styles["requirement"]
                  }
                >
                  <span className={styles["requirement-icon"]}>
                    {passwordValidations.number ? "✓" : "○"}
                  </span>
                  <span>숫자 포함</span>
                </div>
                <div
                  className={
                    passwordValidations.special
                      ? `${styles["requirement"]} ${styles["met"]}`
                      : styles["requirement"]
                  }
                >
                  <span className={styles["requirement-icon"]}>
                    {passwordValidations.special ? "✓" : "○"}
                  </span>
                  <span>특수문자 포함</span>
                </div>
              </div>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>
                비밀번호 확인 <span className={styles["required"]}>*</span>
              </label>
              <input
                type="password"
                className={
                  passwordConfirmValid
                    ? `${styles["form-input"]} ${styles["met"]}`
                    : styles["form-input"]
                }
                placeholder="비밀번호를 다시 입력해주세요"
                value={passwordConfirm}
                onChange={handlePasswordConfirmChange}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>
                가입 목적 <span className={styles["required"]}>*</span>
              </label>
              <select className={styles["form-select"]} required>
                <option value="">선택해주세요</option>
                <option value="learner">프로젝트 학습하기</option>
                <option value="creator">프로젝트 킷 판매하기</option>
                <option value="both">둘 다</option>
              </select>
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>관심 분야</label>
              <select className={styles["form-select"]}>
                <option value="">선택해주세요 (선택사항)</option>
                <option value="web">웹 개발</option>
                <option value="mobile">모바일 앱</option>
                <option value="data">데이터 사이언스</option>
                <option value="ml">머신러닝/AI</option>
                <option value="game">게임 개발</option>
                <option value="backend">백엔드</option>
                <option value="devops">DevOps</option>
              </select>
            </div>

            <div className={styles["checkbox-group"]}>
              <label className={styles["checkbox-label"]}>
                <input type="checkbox" required onChange={handleTermsChange} />
                <span>
                  <a href="#terms">이용약관</a> 및
                  <a href="#privacy">개인정보처리방침</a>에 동의합니다
                  <span className={styles["required"]}>*</span>
                </span>
              </label>
              <label className={styles["checkbox-label"]}>
                <input type="checkbox" />
                <span>마케팅 정보 수신에 동의합니다 (선택)</span>
              </label>
              <label className={styles["checkbox-label"]}>
                <input type="checkbox" />
                <span>이벤트 및 프로모션 알림을 받겠습니다 (선택)</span>
              </label>
            </div>

            <button
              type="submit"
              onClick={handleSubmit}
              className={styles["btn-primary"]}
            >
              회원가입
            </button>

            <div className={styles["form-footer"]}>
              가입하시면 DevLab의
              <a href="#terms" style={{ color: "var(--primary)" }}>
                서비스 약관
              </a>
              과<br />
              <a href="#privacy" style={{ color: "var(--primary)" }}>
                개인정보 보호정책
              </a>
              에 동의하게 됩니다.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
