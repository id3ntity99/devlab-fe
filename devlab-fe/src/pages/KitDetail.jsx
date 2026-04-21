import { useParams } from "react-router-dom";
import styles from "./KitDetail.module.css";
import KitNav from "../components/kit/KitNav.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.js";
import MainContent from "../components/kit/detail/MainContent.jsx";
import Sidebar from "../components/kit/detail/Sidebar.jsx";
import axios from "axios";

export default function KitDetail() {
  const [kit, setKit] = useState(null);
  const { kitId } = useParams();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

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
        if (status === 403 && !isAuthenticated) {
          alert("로그인이 필요한 페이지입니다. 로그인 페이지로 이동합니다.");
          navigate("/login");
        } else {
          alert(`${status}: 키트 정보를 불러오는 데 실패했습니다.`);
          navigate("/kits");
        }
      }
    };
    fetchKit();
  }, [kitId, isAuthenticated, navigate]);

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
