import Hero from "./Hero.jsx";
import Header from "./Header.jsx";
import DetailContent from "./DetailContent.jsx";
import styles from "./MainContent.module.css";

export default function MainContent({ kit }) {
  return (
    <div className={styles["main-content"]}>
      <Hero categoryName={kit.category} />
      <Header
        creatorNickname={kit.creatorNickname}
        learnerNum={kit.learnerNum}
        lastModified={kit.lastUpdate}
        title={kit.title}
      />
      <DetailContent kit={kit} />
      {/*
      <Reviews />
      */}
    </div>
  );
}
