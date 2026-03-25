import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const response = axios.post("http://localhost:8080/api/v1/auth/signin", {
      username: username,
      password: password,
    });
    console.log(response);
  };

  return (
    <div id="login-page">
      <div className="bg-decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      <div className="login-container">
        <div className="brand-side">
          <div className="logo">DevLab</div>
          <h2 className="brand-title">
            실전 프로젝트로
            <br />
            개발자가 되세요
          </h2>
          <p className="brand-description">
            2,500개 이상의 프로젝트 킷으로 실무 역량을 키우고,
            <br />
            당신만의 포트폴리오를 만들어보세요.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              <div className="feature-icon">✓</div>
              <span>검증된 전문가의 고퀄리티 프로젝트 킷</span>
            </li>
            <li className="feature-item">
              <div className="feature-icon">✓</div>
              <span>실전 중심의 프로젝트 기반 학습</span>
            </li>
            <li className="feature-item">
              <div className="feature-icon">✓</div>
              <span>포트폴리오로 활용 가능한 완성 프로젝트</span>
            </li>
            <li className="feature-item">
              <div className="feature-icon">✓</div>
              <span>활발한 개발자 커뮤니티</span>
            </li>
          </ul>
        </div>

        <div className="form-side">
          <div className="form-header">
            <h1 className="form-title">로그인</h1>
            <p className="form-subtitle">
              아직 계정이 없으신가요? <a href="#signup">회원가입</a>
            </p>
          </div>

          <div className="social-login">
            <button className="social-btn">
              <span>G</span> Google
            </button>
            <button className="social-btn">
              <span>GH</span> GitHub
            </button>
          </div>

          <div className="divider">또는</div>

          <form>
            <div className="form-group">
              <label className="form-label">아이디</label>
              <input
                type="text"
                className="form-input"
                placeholder="ID를 입력하세요"
                value={username}
                onChange={(e) => handleUsernameChange(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">비밀번호</label>
              <input
                type="password"
                className="form-input"
                placeholder="••••••••"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
                required
              />
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>로그인 상태 유지</span>
              </label>
              <a href="#forgot" className="forgot-link">
                비밀번호 찾기
              </a>
            </div>

            <button
              type="submit"
              className="btn-primary"
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
