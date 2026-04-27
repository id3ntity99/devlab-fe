import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Dashboard.module.css";
import Navigation from "../components/dashboard/Navigation";
import Welcome from "../components/dashboard/Welcome";
import QuickActions from "../components/dashboard/QuickActions";
import Progress from "../components/dashboard/Progress";

export default function Dashboard() {
  const [nickname, setNickname] = useState("");
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/dashboard", { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          const nickname = response.data.nickname;
          const projects = response.data.projects;
          setNickname(nickname);
          setProjects(projects);
        }
      });
  }, []);
  return (
    <>
      <Navigation nickname={nickname} />
      <div className={styles["main-container"]}>
        <Welcome nickname={nickname} />
        <QuickActions />
        <div className={styles["content-grid"]}>
          <div>
            <Progress projects={projects} />
          </div>
          {/* 
            <LearningRecommendation />
            */}

          <div>
            {/*
            <RecentActivity />
            */}

            {/* 
            <RecentBadge />
            */}

            {/* 
            <ProjectRecommendation />
            */}
          </div>
        </div>
      </div>
    </>
  );
}
