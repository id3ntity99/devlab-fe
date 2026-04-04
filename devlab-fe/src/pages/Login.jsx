import { useState } from "react";
import axios from "axios";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.js";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/v1/auth/signin",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        },
      )
      .then((response) => {
        if (response.status === 200) {
          login(response.data);
          navigate("/dashboard");
        }
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert("아이디와 비밀번호를 확인해주세요.");
        }
      });
  };

  return (
    <div id={styles["login-page"]}>
      <div className={styles["bg-decoration"]}>
        <div className={styles["circle"] + " " + styles["circle-1"]}></div>
        <div className={styles["circle"] + " " + styles["circle-2"]}></div>
        <div className={styles["circle"] + " " + styles["circle-3"]}></div>
      </div>

      <div className={styles["login-container"]}>
        <div className={styles["brand-side"]}>
          <div className={styles["logo"]}>DevLab</div>
          <h2 className={styles["brand-title"]}>
            실전 프로젝트로
            <br />
            개발자가 되세요
          </h2>
          <p className={styles["brand-description"]}>
            2,500개 이상의 프로젝트 킷으로 실무 역량을 키우고,
            <br />
            당신만의 포트폴리오를 만들어보세요.
          </p>
          <ul className={styles["feature-list"]}>
            <li className={styles["feature-item"]}>
              <div className={styles["feature-icon"]}>✓</div>
              <span>검증된 전문가의 고퀄리티 프로젝트 킷</span>
            </li>
            <li className={styles["feature-item"]}>
              <div className={styles["feature-icon"]}>✓</div>
              <span>실전 중심의 프로젝트 기반 학습</span>
            </li>
            <li className={styles["feature-item"]}>
              <div className={styles["feature-icon"]}>✓</div>
              <span>포트폴리오로 활용 가능한 완성 프로젝트</span>
            </li>
            <li className={styles["feature-item"]}>
              <div className={styles["feature-icon"]}>✓</div>
              <span>활발한 개발자 커뮤니티</span>
            </li>
          </ul>
        </div>

        <div className={styles["form-side"]}>
          <div className={styles["form-header"]}>
            <h1 className={styles["form-title"]}>로그인</h1>
            <p className={styles["form-subtitle"]}>
              아직 계정이 없으신가요? <a href="/signup">회원가입</a>
            </p>
          </div>

          <div className={styles["social-login"]}>
            <button className={styles["social-btn"]}>
              <span>G</span> Google
            </button>
            <button className={styles["social-btn"]}>
              <span>GH</span> GitHub
            </button>
          </div>

          <div className={styles["divider"]}>또는</div>

          <form>
            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>아이디</label>
              <input
                type="text"
                className={styles["form-input"]}
                placeholder="ID를 입력하세요"
                value={username}
                onChange={(e) => handleUsernameChange(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-group"]}>
              <label className={styles["form-label"]}>비밀번호</label>
              <input
                type="password"
                className={styles["form-input"]}
                placeholder="••••••••"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
              />
            </div>

            <div className={styles["form-options"]}>
              <label className={styles["checkbox-label"]}>
                <input type="checkbox" />
                <span>로그인 상태 유지</span>
              </label>
              <a href="#forgot" className={styles["forgot-link"]}>
                비밀번호 찾기
              </a>
            </div>

            <button
              type="submit"
              className={styles["btn"] + " " + styles["btn-primary"]}
              onClick={handleSubmit}
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
