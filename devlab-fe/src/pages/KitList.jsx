import { Link, useSearchParams } from "react-router-dom";
import NavigationBar from "../components/Navigation";
import styles from "./KitList.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import KitNav from "../components/kit/KitNav";
import KitGrid from "../components/kit/KitGrid";
import Pagination from "../components/kit/Pagination";

export default function KitList() {
  const [kits, setKits] = useState([]);
  const [totalElement, setTotalElement] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [searchParams] = useSearchParams();

  const page = searchParams.get("page") || 1;

  useEffect(() => {
    const fetchKits = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/kits?pageNum=${page}`,
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
  }, [page]);

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

        <div className={styles["page-header"]}>
          <h1 className={styles["page-title"]}>프로젝트 킷 탐색</h1>
          <p className={styles["page-subtitle"]}>
            검증된 전문가들이 만든 실전 프로젝트로 실력을 키우세요
          </p>
        </div>

        <div className={styles["filters-section"]}>
          <aside className={styles["sidebar"]}>
            <div className={styles["filter-group"]}>
              <h3 className={styles["filter-title"]}>카테고리</h3>
              <label className={styles["filter-option"]}>
                <input type="checkbox" defaultChecked />
                <span>전체</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>웹 개발 (324)</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>모바일 앱 (156)</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>데이터 사이언스 (89)</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>머신러닝 (123)</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>게임 개발 (67)</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>백엔드 (198)</span>
              </label>
            </div>

            <div className={styles["filter-group"]}>
              <h3 className={styles["filter-title"]}>난이도</h3>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>입문</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>중급</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>고급</span>
              </label>
            </div>

            <div className={styles["filter-group"]}>
              <h3 className={styles["filter-title"]}>가격</h3>
              <div className={styles["price-inputs"]}>
                <input
                  type="number"
                  className={styles["price-input"]}
                  placeholder="최소"
                />
                <span style={{ color: "var(--text-muted)" }}>~</span>
                <input
                  type="number"
                  className={styles["price-input"]}
                  placeholder="최대"
                />
              </div>
            </div>

            <div className={styles["filter-group"]}>
              <h3 className={styles["filter-title"]}>기술 스택</h3>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>React</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>Vue.js</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>Python</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>Node.js</span>
              </label>
              <label className={styles["filter-option"]}>
                <input type="checkbox" />
                <span>TensorFlow</span>
              </label>
            </div>
          </aside>

          <div className={styles["content-area"]}>
            <div className={styles["content-header"]}>
              <div className={styles["results-count"]}>
                총 {totalElement}개의 프로젝트 킷
              </div>
              <select className={styles["sort-dropdown"]}>
                <option>인기순</option>
                <option>최신순</option>
                <option>평점순</option>
                <option>가격 낮은순</option>
                <option>가격 높은순</option>
              </select>
            </div>
            <KitGrid kits={kits} />
            <Pagination totalPages={totalPage} hasNext={hasNext} />
          </div>
        </div>
      </div>
    </>
  );
}
