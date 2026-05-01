// Pure helpers for handling the workspace file system on the client.
// Files are stored in a flat map: path -> { content, isReadOnly }
// Folders that contain no files are tracked in a separate Set so the
// user can create empty directories.

export function normalizePath(path) {
  if (!path) return "/";
  let p = path.replace(/\\/g, "/").replace(/\/+/g, "/");
  if (!p.startsWith("/")) p = "/" + p;
  if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
  return p;
}

export function joinPath(parent, name) {
  const p = normalizePath(parent);
  return normalizePath(p === "/" ? `/${name}` : `${p}/${name}`);
}

export function parentPath(path) {
  const p = normalizePath(path);
  if (p === "/") return "/";
  const idx = p.lastIndexOf("/");
  return idx <= 0 ? "/" : p.slice(0, idx);
}

export function basename(path) {
  const p = normalizePath(path);
  const idx = p.lastIndexOf("/");
  return p.slice(idx + 1);
}

export function getExtension(path) {
  const name = basename(path);
  const dot = name.lastIndexOf(".");
  return dot < 0 ? "" : name.slice(dot + 1).toLowerCase();
}

const LANGUAGE_BY_EXT = {
  java: "java",
  js: "javascript",
  jsx: "javascript",
  mjs: "javascript",
  cjs: "javascript",
  ts: "typescript",
  tsx: "typescript",
  py: "python",
  c: "c",
  h: "c",
  cpp: "cpp",
  hpp: "cpp",
  cs: "csharp",
  go: "go",
  rs: "rust",
  rb: "ruby",
  php: "php",
  kt: "kotlin",
  kts: "kotlin",
  swift: "swift",
  scala: "scala",
  html: "html",
  htm: "html",
  css: "css",
  scss: "scss",
  sass: "scss",
  less: "less",
  json: "json",
  xml: "xml",
  yaml: "yaml",
  yml: "yaml",
  md: "markdown",
  markdown: "markdown",
  sh: "shell",
  bash: "shell",
  sql: "sql",
  txt: "plaintext",
};

export function languageFromPath(path) {
  return LANGUAGE_BY_EXT[getExtension(path)] || "plaintext";
}

// Convert the snapshot array from the server into a flat file map.
export function snapshotToFiles(snapshot) {
  const files = {};
  if (!Array.isArray(snapshot)) return files;
  for (const entry of snapshot) {
    if (!entry || !entry.path) continue;
    files[normalizePath(entry.path)] = {
      content: entry.content ?? "",
      isReadOnly: !!entry.isReadOnly,
    };
  }
  return files;
}

// Convert the current files map back to the server snapshot shape.
export function filesToSnapshot(files) {
  return Object.entries(files).map(([path, file]) => ({
    path,
    content: file.content,
    isReadOnly: !!file.isReadOnly,
  }));
}

// Build a tree from files map + an explicit set of folder paths.
// Returns the root node.
export function buildTree(files, extraFolders = new Set()) {
  const folders = new Set(extraFolders);
  for (const path of Object.keys(files)) {
    let cursor = path;
    while (true) {
      const parent = parentPath(cursor);
      if (parent === cursor) break;
      if (parent !== "/") folders.add(parent);
      cursor = parent;
    }
  }

  const root = { name: "", path: "/", type: "folder", children: [] };
  const nodeByPath = { "/": root };

  const sortedFolders = [...folders].sort();
  for (const folderPath of sortedFolders) {
    const parent = nodeByPath[parentPath(folderPath)];
    if (!parent) continue;
    const node = {
      name: basename(folderPath),
      path: folderPath,
      type: "folder",
      children: [],
    };
    parent.children.push(node);
    nodeByPath[folderPath] = node;
  }

  for (const path of Object.keys(files)) {
    const parent = nodeByPath[parentPath(path)];
    if (!parent) continue;
    parent.children.push({
      name: basename(path),
      path,
      type: "file",
      isReadOnly: !!files[path].isReadOnly,
    });
  }

  const sortNode = (node) => {
    if (!node.children) return;
    node.children.sort((a, b) => {
      if (a.type !== b.type) return a.type === "folder" ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    node.children.forEach(sortNode);
  };
  sortNode(root);

  return root;
}

// Returns true if `path` is or sits under `prefix`.
function isUnder(path, prefix) {
  if (prefix === "/") return true;
  return path === prefix || path.startsWith(prefix + "/");
}

export function deletePath(files, folders, target) {
  const t = normalizePath(target);
  const newFiles = {};
  for (const [path, file] of Object.entries(files)) {
    if (!isUnder(path, t)) newFiles[path] = file;
  }
  const newFolders = new Set();
  for (const f of folders) {
    if (!isUnder(f, t)) newFolders.add(f);
  }
  return { files: newFiles, folders: newFolders };
}

// Move every path under `from` to live under `to`.
// Used for both rename and move.
export function movePath(files, folders, from, to) {
  const f = normalizePath(from);
  const t = normalizePath(to);
  if (f === t) return { files, folders };

  const newFiles = {};
  for (const [path, file] of Object.entries(files)) {
    if (isUnder(path, f)) {
      const suffix = path.slice(f.length);
      newFiles[normalizePath(t + suffix)] = file;
    } else {
      newFiles[path] = file;
    }
  }
  const newFolders = new Set();
  for (const folder of folders) {
    if (isUnder(folder, f)) {
      const suffix = folder.slice(f.length);
      newFolders.add(normalizePath(t + suffix));
    } else {
      newFolders.add(folder);
    }
  }
  return { files: newFiles, folders: newFolders };
}

export function pathExists(files, folders, path) {
  const p = normalizePath(path);
  if (Object.prototype.hasOwnProperty.call(files, p)) return true;
  if (folders.has(p)) return true;
  // Implicit folder via existing files.
  for (const filePath of Object.keys(files)) {
    if (filePath.startsWith(p + "/")) return true;
  }
  return false;
}
