import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./FileBrowser.module.css";
import { basename, joinPath, parentPath } from "./fileTree";

export default function FileBrowser({
  tree,
  activePath,
  onSelectFile,
  onCreateFile,
  onCreateFolder,
  onRename,
  onDelete,
}) {
  // What the user has explicitly opened/closed. The active file's ancestors
  // are merged in at render time so the file is always reachable.
  const [userExpanded, setUserExpanded] = useState(() => new Set(["/"]));
  const [contextMenu, setContextMenu] = useState(null);
  const [pendingCreate, setPendingCreate] = useState(null); // { parentPath, type }
  const [renaming, setRenaming] = useState(null); // path

  const expanded = useMemo(() => {
    const next = new Set(userExpanded);
    next.add("/");
    if (activePath) {
      let p = parentPath(activePath);
      while (p) {
        next.add(p);
        const parent = parentPath(p);
        if (parent === p) break;
        p = parent;
      }
    }
    return next;
  }, [userExpanded, activePath]);

  // Close context menu on any outside click.
  useEffect(() => {
    if (!contextMenu) return;
    const close = () => setContextMenu(null);
    window.addEventListener("click", close);
    window.addEventListener("contextmenu", close);
    return () => {
      window.removeEventListener("click", close);
      window.removeEventListener("contextmenu", close);
    };
  }, [contextMenu]);

  const toggleExpand = (path) => {
    setUserExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(path)) next.delete(path);
      else next.add(path);
      return next;
    });
  };

  const ensureExpanded = (path) => {
    setUserExpanded((prev) => {
      if (prev.has(path)) return prev;
      const next = new Set(prev);
      next.add(path);
      return next;
    });
  };

  const startCreate = (parentPath, type) => {
    ensureExpanded(parentPath);
    setPendingCreate({ parentPath, type });
    setContextMenu(null);
  };

  const startRename = (path) => {
    setRenaming(path);
    setContextMenu(null);
  };

  const handleContextMenu = (e, node) => {
    e.preventDefault();
    e.stopPropagation();
    setContextMenu({
      x: e.clientX,
      y: e.clientY,
      node: node || { type: "folder", path: "/" },
    });
  };

  const submitCreate = (name) => {
    const trimmed = name.trim();
    if (trimmed && pendingCreate) {
      const fullPath = joinPath(pendingCreate.parentPath, trimmed);
      if (pendingCreate.type === "file") onCreateFile?.(fullPath);
      else onCreateFolder?.(fullPath);
    }
    setPendingCreate(null);
  };

  const submitRename = (path, newName) => {
    const trimmed = newName.trim();
    if (trimmed && trimmed !== basename(path)) {
      onRename?.(path, joinPath(parentPath(path), trimmed));
    }
    setRenaming(null);
  };

  return (
    <aside
      className={styles["sidebar"]}
      onContextMenu={(e) => handleContextMenu(e, null)}
    >
      <div className={styles["sidebar-header"]}>
        <span>프로젝트 파일</span>
        <div className={styles["sidebar-actions"]}>
          <button
            type="button"
            className={styles["icon-btn"]}
            title="새 파일"
            onClick={() => startCreate("/", "file")}
          >
            +📄
          </button>
          <button
            type="button"
            className={styles["icon-btn"]}
            title="새 폴더"
            onClick={() => startCreate("/", "folder")}
          >
            +📁
          </button>
        </div>
      </div>
      <div className={styles["file-tree"]}>
        {tree?.children?.length ? (
          <TreeChildren
            nodes={tree.children}
            depth={0}
            expanded={expanded}
            activePath={activePath}
            renaming={renaming}
            pendingCreate={pendingCreate}
            onToggleExpand={toggleExpand}
            onSelectFile={onSelectFile}
            onContextMenu={handleContextMenu}
            onSubmitCreate={submitCreate}
            onCancelCreate={() => setPendingCreate(null)}
            onSubmitRename={submitRename}
            onCancelRename={() => setRenaming(null)}
          />
        ) : (
          <div className={styles["empty"]}>비어 있습니다</div>
        )}
        {pendingCreate && pendingCreate.parentPath === "/" && (
          <NewItemRow
            depth={0}
            type={pendingCreate.type}
            onSubmit={submitCreate}
            onCancel={() => setPendingCreate(null)}
          />
        )}
      </div>
      {contextMenu && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          node={contextMenu.node}
          onCreateFile={(parent) => startCreate(parent, "file")}
          onCreateFolder={(parent) => startCreate(parent, "folder")}
          onRename={(path) => startRename(path)}
          onDelete={(path) => {
            onDelete?.(path);
            setContextMenu(null);
          }}
        />
      )}
    </aside>
  );
}

function TreeChildren({
  nodes,
  depth,
  expanded,
  activePath,
  renaming,
  pendingCreate,
  onToggleExpand,
  onSelectFile,
  onContextMenu,
  onSubmitCreate,
  onCancelCreate,
  onSubmitRename,
  onCancelRename,
}) {
  return (
    <>
      {nodes.map((node) => (
        <TreeNode
          key={node.path}
          node={node}
          depth={depth}
          expanded={expanded}
          activePath={activePath}
          renaming={renaming}
          pendingCreate={pendingCreate}
          onToggleExpand={onToggleExpand}
          onSelectFile={onSelectFile}
          onContextMenu={onContextMenu}
          onSubmitCreate={onSubmitCreate}
          onCancelCreate={onCancelCreate}
          onSubmitRename={onSubmitRename}
          onCancelRename={onCancelRename}
        />
      ))}
    </>
  );
}

function TreeNode({
  node,
  depth,
  expanded,
  activePath,
  renaming,
  pendingCreate,
  onToggleExpand,
  onSelectFile,
  onContextMenu,
  onSubmitCreate,
  onCancelCreate,
  onSubmitRename,
  onCancelRename,
}) {
  const isFolder = node.type === "folder";
  const isOpen = isFolder && expanded.has(node.path);
  const isActive = !isFolder && activePath === node.path;
  const isRenaming = renaming === node.path;
  const indent = { paddingLeft: 8 + depth * 14 };

  const handleClick = () => {
    if (isRenaming) return;
    if (isFolder) onToggleExpand(node.path);
    else onSelectFile?.(node.path);
  };

  return (
    <>
      <div
        className={[
          isFolder ? styles["folder-item"] : styles["file-item"],
          isActive ? styles["active"] : "",
          node.isReadOnly ? styles["readonly"] : "",
        ]
          .filter(Boolean)
          .join(" ")}
        style={indent}
        onClick={handleClick}
        onContextMenu={(e) => onContextMenu(e, node)}
      >
        {isFolder && (
          <span className={styles["chevron"]}>{isOpen ? "▾" : "▸"}</span>
        )}
        <span className={styles["item-icon"]}>
          {isFolder ? (isOpen ? "📂" : "📁") : "📄"}
        </span>
        {isRenaming ? (
          <InlineInput
            initialValue={node.name}
            onSubmit={(name) => onSubmitRename(node.path, name)}
            onCancel={onCancelRename}
          />
        ) : (
          <span className={styles["item-name"]}>{node.name}</span>
        )}
        {!isFolder && node.isReadOnly && (
          <span className={styles["readonly-badge"]} title="읽기 전용">
            🔒
          </span>
        )}
      </div>
      {isFolder && isOpen && (
        <>
          <TreeChildren
            nodes={node.children || []}
            depth={depth + 1}
            expanded={expanded}
            activePath={activePath}
            renaming={renaming}
            pendingCreate={pendingCreate}
            onToggleExpand={onToggleExpand}
            onSelectFile={onSelectFile}
            onContextMenu={onContextMenu}
            onSubmitCreate={onSubmitCreate}
            onCancelCreate={onCancelCreate}
            onSubmitRename={onSubmitRename}
            onCancelRename={onCancelRename}
          />
          {pendingCreate && pendingCreate.parentPath === node.path && (
            <NewItemRow
              depth={depth + 1}
              type={pendingCreate.type}
              onSubmit={onSubmitCreate}
              onCancel={onCancelCreate}
            />
          )}
        </>
      )}
    </>
  );
}

function NewItemRow({ depth, type, onSubmit, onCancel }) {
  return (
    <div
      className={
        type === "folder" ? styles["folder-item"] : styles["file-item"]
      }
      style={{ paddingLeft: 8 + depth * 14 }}
    >
      <span className={styles["item-icon"]}>
        {type === "folder" ? "📁" : "📄"}
      </span>
      <InlineInput initialValue="" onSubmit={onSubmit} onCancel={onCancel} />
    </div>
  );
}

function InlineInput({ initialValue, onSubmit, onCancel }) {
  const [value, setValue] = useState(initialValue);
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  return (
    <input
      ref={ref}
      className={styles["inline-input"]}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === "Enter") onSubmit(value);
        else if (e.key === "Escape") onCancel();
        e.stopPropagation();
      }}
      onClick={(e) => e.stopPropagation()}
      onBlur={() => onSubmit(value)}
    />
  );
}

function ContextMenu({
  x,
  y,
  node,
  onCreateFile,
  onCreateFolder,
  onRename,
  onDelete,
}) {
  const isFolder = node.type === "folder";
  const targetParent = isFolder ? node.path : parentPath(node.path);
  const isRoot = node.path === "/";

  return (
    <div
      className={styles["context-menu"]}
      style={{ top: y, left: x }}
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        className={styles["menu-item"]}
        onClick={() => onCreateFile(targetParent)}
      >
        새 파일
      </button>
      <button
        type="button"
        className={styles["menu-item"]}
        onClick={() => onCreateFolder(targetParent)}
      >
        새 폴더
      </button>
      {!isRoot && (
        <>
          <div className={styles["menu-divider"]} />
          <button
            type="button"
            className={styles["menu-item"]}
            disabled={node.isReadOnly}
            onClick={() => !node.isReadOnly && onRename(node.path)}
          >
            이름 변경
          </button>
          <button
            type="button"
            className={`${styles["menu-item"]} ${styles["menu-item-danger"]}`}
            disabled={node.isReadOnly}
            onClick={() => !node.isReadOnly && onDelete(node.path)}
          >
            삭제
          </button>
        </>
      )}
    </div>
  );
}
