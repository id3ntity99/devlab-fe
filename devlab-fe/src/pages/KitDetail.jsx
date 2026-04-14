import { Link, useParams } from "react-router-dom";
import styles from "./KitDetail.module.css";
import KitNav from "../components/kit/KitNav.jsx";
import { useEffect, useState } from "react";
import MainContent from "../components/kit/detail/MainContent.jsx";
import Sidebar from "../components/kit/detail/Sidebar.jsx";
import axios from "axios";

export default function KitDetail() {
  const [kit, setKit] = useState(null);
  const { kitId } = useParams();
  useEffect(() => {
    const fetchKit = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/kits/${kitId}`,
          { withCredentials: true },
        );
        const kitData = response.data;
        setKit(kitData);
      } catch (error) {
        const status = error.response ? error.response.status : "Network Error";
        alert(`${status}: 키트 정보를 불러오는 데 실패했습니다.`);
      }
    };
    fetchKit();
  }, [kitId]);

  if (!kit) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <KitNav />
      <div className={styles["main-container"]}>
        <div className={styles["content-grid"]}>
          <MainContent kit={kit} />
          <Sidebar kit={kit} />
        </div>
      </div>
    </>
  );
}
