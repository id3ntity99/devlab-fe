import { useEffect, useImperativeHandle, useRef, useState } from "react";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import "@xterm/xterm/css/xterm.css";
import styles from "./Terminal.module.css";

const ANSI = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const STATUS_TEXT = {
  idle: "대기",
  connecting: "연결 중",
  open: "연결됨",
  closed: "연결 끊김",
  error: "오류",
};

export default function Terminal({ wsUrl, ref }) {
  const containerRef = useRef(null);
  const termRef = useRef(null);
  const fitRef = useRef(null);
  const wsRef = useRef(null);
  const pendingRef = useRef([]);
  const [status, setStatus] = useState("idle");

  // Initialize xterm once.
  useEffect(() => {
    if (!containerRef.current) return undefined;

    const term = new XTerm({
      convertEol: true,
      cursorBlink: false,
      disableStdin: true,
      fontFamily: "JetBrains Mono, Consolas, monospace",
      fontSize: 13,
      theme: {
        background: "#1e1e1e",
        foreground: "#e5e7eb",
        cursor: "#1e1e1e",
        selectionBackground: "#3b82f680",
      },
      scrollback: 5000,
    });
    const fit = new FitAddon();
    term.loadAddon(fit);
    term.open(containerRef.current);
    try {
      fit.fit();
    } catch {
      /* container not measured yet */
    }
    termRef.current = term;
    fitRef.current = fit;

    term.writeln(`${ANSI.gray}DevLab Console — 실행 결과가 여기에 표시됩니다.${ANSI.reset}`);

    const observer = new ResizeObserver(() => {
      try {
        fit.fit();
      } catch {
        /* ignore */
      }
    });
    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      term.dispose();
      termRef.current = null;
      fitRef.current = null;
    };
  }, []);

  // (Re)connect when wsUrl changes.
  useEffect(() => {
    if (!wsUrl) return undefined;
    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }

    setStatus("connecting");
    let ws;
    try {
      ws = new WebSocket(wsUrl);
    } catch {
      setStatus("error");
      writeToTerm(`${ANSI.red}WebSocket 연결을 생성할 수 없습니다.${ANSI.reset}`);
      return undefined;
    }
    wsRef.current = ws;

    ws.onopen = () => {
      setStatus("open");
      writeToTerm(`${ANSI.gray}[연결됨] ${wsUrl}${ANSI.reset}`);
      const queued = pendingRef.current;
      pendingRef.current = [];
      for (const msg of queued) ws.send(msg);
    };
    ws.onmessage = (event) => {
      handleIncoming(event.data);
    };
    ws.onerror = () => {
      setStatus("error");
      writeToTerm(`${ANSI.red}[오류] WebSocket 통신 중 문제가 발생했습니다.${ANSI.reset}`);
    };
    ws.onclose = () => {
      setStatus("closed");
      writeToTerm(`${ANSI.gray}[연결 끊김]${ANSI.reset}`);
    };

    return () => {
      ws.close();
      if (wsRef.current === ws) wsRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wsUrl]);

  const writeToTerm = (text) => {
    const term = termRef.current;
    if (!term) return;
    term.writeln(text);
  };

  const handleIncoming = (data) => {
    if (typeof data !== "string") {
      writeToTerm(String(data));
      return;
    }
    let parsed = null;
    if (data.length > 0 && (data[0] === "{" || data[0] === "[")) {
      try {
        parsed = JSON.parse(data);
      } catch {
        parsed = null;
      }
    }
    if (!parsed) {
      writeToTerm(data);
      return;
    }
    const items = Array.isArray(parsed) ? parsed : [parsed];
    for (const item of items) {
      writeFrame(item);
    }
  };

  const writeFrame = (frame) => {
    if (typeof frame === "string") {
      writeToTerm(frame);
      return;
    }
    const line =
      frame.line ?? frame.message ?? frame.text ?? frame.data ?? "";
    const level = (frame.level || frame.type || "").toLowerCase();
    let prefix = "";
    if (level === "stderr" || level === "error") prefix = ANSI.red;
    else if (level === "stdout") prefix = "";
    else if (level === "success") prefix = ANSI.green;
    else if (level === "warn" || level === "warning") prefix = ANSI.yellow;
    else if (level === "info") prefix = ANSI.cyan;

    if (level === "end" || frame.type === "end") {
      const code = frame.exitCode ?? frame.code;
      writeToTerm(
        `${ANSI.gray}[종료${code != null ? ` · code ${code}` : ""}]${ANSI.reset}`,
      );
      return;
    }

    writeToTerm(prefix ? `${prefix}${line}${ANSI.reset}` : String(line));
  };

  const send = (payload) => {
    const json = typeof payload === "string" ? payload : JSON.stringify(payload);
    const ws = wsRef.current;
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(json);
    } else {
      pendingRef.current.push(json);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      clear: () => {
        termRef.current?.clear();
      },
      writeLine: (text) => writeToTerm(text),
      runCode: (payload) => {
        termRef.current?.clear();
        writeToTerm(`${ANSI.cyan}▶ 실행 요청 전송...${ANSI.reset}`);
        send({ type: "run", payload });
      },
      isOpen: () => wsRef.current?.readyState === WebSocket.OPEN,
    }),
    [],
  );

  const handleClear = () => termRef.current?.clear();
  const handleReconnect = () => {
    const ws = wsRef.current;
    if (ws) ws.close();
    // Force re-run of the wsUrl effect by toggling status; simplest approach
    // is to ask the parent to bump the URL. As a pragmatic local fallback,
    // open a fresh socket directly.
    if (!wsUrl) return;
    setStatus("connecting");
    try {
      const newWs = new WebSocket(wsUrl);
      wsRef.current = newWs;
      newWs.onopen = () => {
        setStatus("open");
        writeToTerm(`${ANSI.gray}[재연결됨]${ANSI.reset}`);
      };
      newWs.onmessage = (e) => handleIncoming(e.data);
      newWs.onerror = () => setStatus("error");
      newWs.onclose = () => setStatus("closed");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles["terminal-panel"]}>
      <div className={styles["terminal-header"]}>
        <div className={styles["terminal-title-group"]}>
          <span className={styles["terminal-title"]}>콘솔</span>
          <span
            className={`${styles["status-pill"]} ${styles[`status-${status}`]}`}
          >
            ● {STATUS_TEXT[status] || status}
          </span>
        </div>
        <div className={styles["terminal-actions"]}>
          <button
            type="button"
            className={styles["term-btn"]}
            onClick={handleClear}
            title="콘솔 비우기"
          >
            🗑️
          </button>
          <button
            type="button"
            className={styles["term-btn"]}
            onClick={handleReconnect}
            title="재연결"
          >
            ⟲
          </button>
        </div>
      </div>
      <div ref={containerRef} className={styles["terminal-content"]} />
    </div>
  );
}
