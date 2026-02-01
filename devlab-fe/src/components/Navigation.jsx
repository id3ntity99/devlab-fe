import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

export default function NavigationBar() {
  const currentPath = useLocation().pathname;

  const [activeLink, setActiveLink] = useState(currentPath);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">DevLab</div>
          <div className="nav-center">
            <a
              href="/explore"
              className={activeLink === "/explore" ? "active" : ""}
              onClick={() => handleLinkClick("/explore")}
            >
              킷 둘러보기
            </a>
            <a
              href="/create"
              className={activeLink === "/create" ? "active" : ""}
              onClick={() => handleLinkClick("/create")}
            >
              킷 만들기
            </a>
            <a
              href="/community"
              className={activeLink === "/community" ? "active" : ""}
              onClick={() => handleLinkClick("/community")}
            >
              커뮤니티
            </a>
            <a
              href="/pricing"
              className={activeLink === "/pricing" ? "active" : ""}
              onClick={() => handleLinkClick("/pricing")}
            >
              요금제
            </a>
          </div>
          <div className="nav-right">
            <a href="/login" className="btn btn-next">
              로그인
            </a>
            <a href="/signup" className="btn btn-primary">
              시작하기
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
