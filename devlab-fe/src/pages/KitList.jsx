import { useSearchParams } from "react-router-dom";
import styles from "./KitList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import KitNav from "../components/kit/KitNav";
import KitGrid from "../components/kit/KitGrid";
import Pagination from "../components/kit/Pagination";
import { useNavigate } from "react-router-dom";

export default function KitList() {
  const [kits, setKits] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  // Validate URL parameters on component mount
  useEffect(() => {
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    if (!page || !size) {
      navigate("/kits?page=1&size=9", { replace: true });
    }
  }, [searchParams, navigate]);

  // Fetch kits whenever search parameters change
  useEffect(() => {
    const page = searchParams.get("page");
    const size = searchParams.get("size");
    const fetchKits = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/kits?page=${page}&size=${size}`,
          {
            withCredentials: true,
          },
        );
        setKits(response.data.data);
        setTotalPage(response.data.totalPages);
        setTotalElement(response.data.totalElements);
        setHasNext(response.data.hasNext);
      } catch (error) {
        console.error("Error fetching kits:", error);
      }
    };
    fetchKits();
  }, [searchParams]);

  return (
    <>
      <KitNav />
      <div className={styles["main-container"]}>
        <div className={styles["breadcrumb"]}>
          <a href="#" className={styles["breadcrumb-link"]}>
            홈
          </a>
          <span className={styles["breadcrumb-separator"]}>/</span>
          <span>프로젝트 킷</span>
        </div>

        {/* FIXME - Uncomment when search functionality is implemented 
        <div className={styles["search-section"]}>
          <div className={styles["search-bar"]}>
            <input
              type="text"
              className={styles["search-input"]}
              placeholder="프로젝트 킷 검색... (예: React, Python, 머신러닝)"
            />
            <span className={styles["search-icon"]}>🔍</span>
          </div>
        </div>
        */}
        <div className={styles["page-header"]}>
          <h1 className={styles["page-title"]}>프로젝트 킷 탐색</h1>
          <p className={styles["page-subtitle"]}>
            검증된 전문가들이 만든 실전 프로젝트로 실력을 키우세요
          </p>
        </div>

        {/*<div className={styles["filters-section"]}>*/}
        {/*<KitFilter />*/}
        <div className={styles["content-area"]}>
          <div className={styles["content-header"]}>
            <div className={styles["results-count"]}>
              총 {totalElement}개의 프로젝트 킷
            </div>
            {/* 
              <select className={styles["sort-dropdown"]}>
                <option>인기순</option>
                <option>최신순</option>
                <option>평점순</option>
                <option>가격 낮은순</option>
                <option>가격 높은순</option>
              </select>
              */}
          </div>
          <KitGrid kits={kits} />
          <Pagination totalPages={totalPage} hasNext={hasNext} />
        </div>
      </div>
      {/*</div>*/}
    </>
  );
}
