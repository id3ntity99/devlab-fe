import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MyEditor from "../components/ide/MyEditor";
import FileBrowser from "../components/ide/FileBrowser";
import InstructionPanel from "../components/ide/InstructionPanel";
import NavBar from "../components/ide/NavBar";
import Terminal from "../components/ide/Terminal";
import {
  buildTree,
  deletePath,
  filesToSnapshot,
  movePath,
  pathExists,
  snapshotToFiles,
} from "../components/ide/fileTree";
import styles from "./Ide.module.css";
import "./Ide.css";

const API_BASE = "http://localhost:8080/api/v1";

function buildWsUrl(kitId) {
  // Convert the http(s) base into ws(s) and append the workspace logs path.
  const base = API_BASE.replace(/^http/, "ws");
  return `${base}/kits/${kitId}/workspace/logs`;
}

export default function Ide() {
  const { kitId } = useParams();

  const [files, setFiles] = useState({});
  const [folders, setFolders] = useState(() => new Set());
  const [problem, setProblem] = useState(null);
  const [openTabs, setOpenTabs] = useState([]);
  const [activePath, setActivePath] = useState(null);
  const [loadedKitId, setLoadedKitId] = useState(null);
  const [loadError, setLoadError] = useState(null);
  const [isRunning, setIsRunning] = useState(false);

  const terminalRef = useRef(null);

  // Loading is derived: we're loading whenever the data on screen doesn't
  // match the kit id from the URL and we don't already have an error.
  const loading = loadedKitId !== kitId && !loadError;
  const wsUrl = kitId ? buildWsUrl(kitId) : null;

  // Fetch the workspace snapshot.
  useEffect(() => {
    let cancelled = false;
    axios
      .get(`${API_BASE}/kits/${kitId}/workspace`, { withCredentials: true })
      .then((response) => {
        if (cancelled) return;
        const data = response.data || {};
        const fileMap = snapshotToFiles(data.snapshot);
        setFiles(fileMap);
        setFolders(new Set());
        setProblem(data.currentProblem || null);
        setLoadError(null);

        // Auto-open the first writable file (likely the user's working file).
        const paths = Object.keys(fileMap);
        const firstWritable = paths.find((p) => !fileMap[p].isReadOnly);
        const initial = firstWritable || paths[0] || null;
        setOpenTabs(initial ? [initial] : []);
        setActivePath(initial);
        setLoadedKitId(kitId);
      })
      .catch((error) => {
        if (cancelled) return;
        const title =
          error?.response?.data?.title ||
          error?.message ||
          "워크스페이스를 불러오지 못했습니다.";
        setLoadError(title);
      });
    return () => {
      cancelled = true;
    };
  }, [kitId]);

  const tree = useMemo(() => buildTree(files, folders), [files, folders]);

  const openFile = (path) => {
    if (!files[path]) return;
    setOpenTabs((prev) => (prev.includes(path) ? prev : [...prev, path]));
    setActivePath(path);
  };

  const closeTab = (path) => {
    setOpenTabs((prev) => {
      const next = prev.filter((p) => p !== path);
      if (path === activePath) {
        const idx = prev.indexOf(path);
        const fallback = next[idx] ?? next[idx - 1] ?? null;
        setActivePath(fallback);
      }
      return next;
    });
  };

  const updateContent = (path, content) => {
    setFiles((prev) => {
      const file = prev[path];
      if (!file || file.isReadOnly) return prev;
      return { ...prev, [path]: { ...file, content } };
    });
  };

  const handleCreateFile = (fullPath) => {
    if (pathExists(files, folders, fullPath)) {
      window.alert(`이미 존재하는 경로입니다: ${fullPath}`);
      return;
    }
    setFiles((prev) => ({
      ...prev,
      [fullPath]: { content: "", isReadOnly: false },
    }));
    setOpenTabs((prev) =>
      prev.includes(fullPath) ? prev : [...prev, fullPath],
    );
    setActivePath(fullPath);
  };

  const handleCreateFolder = (fullPath) => {
    if (pathExists(files, folders, fullPath)) {
      window.alert(`이미 존재하는 경로입니다: ${fullPath}`);
      return;
    }
    setFolders((prev) => {
      const next = new Set(prev);
      next.add(fullPath);
      return next;
    });
  };

  const handleRename = (oldPath, newPath) => {
    if (oldPath === newPath) return;
    if (pathExists(files, folders, newPath)) {
      window.alert(`이미 존재하는 경로입니다: ${newPath}`);
      return;
    }
    const { files: nextFiles, folders: nextFolders } = movePath(
      files,
      folders,
      oldPath,
      newPath,
    );
    setFiles(nextFiles);
    setFolders(nextFolders);
    setOpenTabs((prev) =>
      prev.map((p) => {
        if (p === oldPath) return newPath;
        if (p.startsWith(oldPath + "/"))
          return newPath + p.slice(oldPath.length);
        return p;
      }),
    );
    setActivePath((prev) => {
      if (!prev) return prev;
      if (prev === oldPath) return newPath;
      if (prev.startsWith(oldPath + "/"))
        return newPath + prev.slice(oldPath.length);
      return prev;
    });
  };

  const handleDelete = (target) => {
    const file = files[target];
    if (file?.isReadOnly) {
      window.alert("읽기 전용 파일은 삭제할 수 없습니다.");
      return;
    }
    if (!window.confirm(`정말 삭제하시겠어요?\n${target}`)) return;

    const { files: nextFiles, folders: nextFolders } = deletePath(
      files,
      folders,
      target,
    );
    setFiles(nextFiles);
    setFolders(nextFolders);
    setOpenTabs((prev) =>
      prev.filter((p) => p !== target && !p.startsWith(target + "/")),
    );
    setActivePath((prev) => {
      if (!prev) return prev;
      if (prev === target || prev.startsWith(target + "/")) {
        const remaining = openTabs.filter(
          (p) => p !== target && !p.startsWith(target + "/"),
        );
        return remaining[0] ?? null;
      }
      return prev;
    });
  };

  const handleRun = () => {
    const term = terminalRef.current;
    if (!term) return;
    if (!term.isOpen()) {
      term.writeLine(
        "\x1b[33m콘솔이 아직 연결되지 않았습니다. 잠시 후 다시 시도하세요.\x1b[0m",
      );
      return;
    }
    setIsRunning(true);
    term.runCode({
      kitId,
      problemId: problem?.problemId,
      snapshot: filesToSnapshot(files),
    });
    // The server should send a `{type: "end"}` frame; we relax the running
    // state after a short window in case it doesn't (so the UI never sticks).
    window.setTimeout(() => setIsRunning(false), 8000);
  };

  const handleSubmit = () => {
    if (!problem) return;
    setIsRunning(true);
    axios
      .post(
        `${API_BASE}/kits/${kitId}/submissions`, //FIXME Check API spec and modify the URI
        {
          problemId: problem.problemId,
          snapshot: filesToSnapshot(files),
        },
        { withCredentials: true },
      )
      .then((response) => {
        const data = response.data || {};
        const passed = data.passed ?? data.success;
        if (passed) {
          window.alert("정답입니다! 🎉");
        } else {
          window.alert(
            data.message || "아직 정답이 아닙니다. 다시 시도해 보세요.",
          );
        }
      })
      .catch((error) => {
        const title =
          error?.response?.data?.title ||
          error?.message ||
          "제출에 실패했습니다.";
        window.alert(title);
      })
      .finally(() => setIsRunning(false));
  };

  if (loading) {
    return (
      <div className={styles["page-loading"]}>
        워크스페이스를 불러오는 중...
      </div>
    );
  }

  if (loadError) {
    return (
      <div className={styles["page-loading"]}>
        <p>{loadError}</p>
      </div>
    );
  }

  return (
    <div className={styles["ide-root"]}>
      <NavBar
        title={problem?.title}
        stepNum={problem?.stepNum}
        isRunning={isRunning}
        onRun={handleRun}
        onSubmit={handleSubmit}
      />
      <div className={styles["main-layout"]}>
        <FileBrowser
          tree={tree}
          activePath={activePath}
          onSelectFile={openFile}
          onCreateFile={handleCreateFile}
          onCreateFolder={handleCreateFolder}
          onRename={handleRename}
          onDelete={handleDelete}
        />
        <MyEditor
          openTabs={openTabs}
          activePath={activePath}
          files={files}
          onSelectTab={setActivePath}
          onCloseTab={closeTab}
          onChangeContent={updateContent}
        />
        <aside className={styles["right-sidebar"]}>
          <InstructionPanel problem={problem} />
          <Terminal ref={terminalRef} wsUrl={wsUrl} />
        </aside>
      </div>
      <div className={styles["bottom-bar"]}>
        <div className={styles["status-items"]}>
          <div className={styles["status-item"]}>
            <div
              className={`${styles["status-dot"]} ${isRunning ? styles["running"] : ""}`}
            />
            <span>{isRunning ? "코드 실행 중" : "준비 완료"}</span>
          </div>
          {problem?.languageSupport && (
            <div className={styles["status-item"]}>
              <span>{problem.languageSupport}</span>
            </div>
          )}
        </div>
        <div className={styles["status-items"]}>
          {activePath && (
            <div className={styles["status-item"]}>
              <span>{activePath}</span>
            </div>
          )}
          <div className={styles["status-item"]}>
            <span>UTF-8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
