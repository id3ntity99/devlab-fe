import { useEffect, useImperativeHandle, useRef } from "react";
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

export default function Terminal({ ref }) {
  const containerRef = useRef(null);
  const termRef = useRef(null);
  const fitRef = useRef(null);

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

    term.writeln(
      `${ANSI.gray}DevLab Console — 실행 결과가 여기에 표시됩니다.${ANSI.reset}`,
    );

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

  const handleClear = () => termRef.current?.clear();

  const writeToTerm = (message) => {
    const term = termRef.current;
    if (!term) return;
    const logType = message.logType;
    const content = message.logContent;
    if (!content) {
      return;
    }
    if (logType === "EOF") {
      term.write(`${ANSI.cyan}${content}${ANSI.reset}`);
    } else {
      term.write(content);
    }
  };

  useImperativeHandle(
    ref,
    () => ({
      clear: () => {
        termRef.current?.clear();
      },
      writeLine: (text) => writeToTerm(text),
    }),
    [],
  );

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
        </div>
      </div>
      <div ref={containerRef} className={styles["terminal-content"]} />
    </div>
  );
}
