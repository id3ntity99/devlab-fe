import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navigation.module.css";

export default function NavigationBar() {
  const currentPath = useLocation().pathname;

  const [activeLink, setActiveLink] = useState(currentPath);

  const handleLinkClick = (href) => {
    setActiveLink(href);
  };

  return (
    <>
      <nav className={styles["nav"]}>
        <div className={styles["nav-container"]}>
          <div className={styles["logo"]}>DevLab</div>
          <div className={styles["nav-center"]}>
            <a
              href="/explore"
              className={activeLink === "/explore" ? styles["active"] : ""}
              onClick={() => handleLinkClick("/explore")}
            >
              킷 둘러보기
            </a>
            <a
              href="/create"
              className={activeLink === "/create" ? styles["active"] : ""}
              onClick={() => handleLinkClick("/create")}
            >
              킷 만들기
            </a>
            <a
              href="/community"
              className={activeLink === "/community" ? styles["active"] : ""}
              onClick={() => handleLinkClick("/community")}
            >
              커뮤니티
            </a>
            <a
              href="/pricing"
              className={activeLink === "/pricing" ? styles["active"] : ""}
              onClick={() => handleLinkClick("/pricing")}
            >
              요금제
            </a>
          </div>
          <div className={styles["nav-right"]}>
            <a
              href="/login"
              className={styles["btn"] + " " + styles["btn-text"]}
            >
              로그인
            </a>
            <a
              href="/signup"
              className={styles["btn"] + " " + styles["btn-primary"]}
            >
              시작하기
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
