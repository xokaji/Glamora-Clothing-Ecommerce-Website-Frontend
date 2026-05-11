/* One-off utility: strip comments from project source files.
   Intended to be run once and then deleted.
*/

const fs = require('fs');
const path = require('path');
const strip = require('strip-comments');

const repoRoot = path.resolve(__dirname);

const IGNORE_DIRS = new Set([
  'node_modules',
  '.git',
  'dist',
  'build',
  'coverage',
  '.next',
  '.turbo',
  '.cache',
]);

const EXTENSIONS = new Set([
  '.js',
  '.jsx',
  '.mjs',
  '.cjs',
  '.ts',
  '.tsx',
  '.css',
  '.scss',
  '.sass',
  '.less',
  '.html',
  '.htm',
  '.xml',
  '.svg',
  '.md',
]);

function shouldIgnoreDir(dirName) {
  if (!dirName) return false;
  if (IGNORE_DIRS.has(dirName)) return true;
  // also ignore hidden tool dirs (but not .vscode which may have settings comments)
  if (dirName.startsWith('.') && dirName !== '.vscode') return true;
  return false;
}

function walk(dir, onFile) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (shouldIgnoreDir(entry.name)) continue;
      walk(fullPath, onFile);
      continue;
    }
    if (entry.isFile()) onFile(fullPath);
  }
}

function stripFileComments(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!EXTENSIONS.has(ext)) return { changed: false };

  // Avoid touching lockfiles or generated/minified assets.
  const base = path.basename(filePath);
  if (base === 'package-lock.json') return { changed: false };

  const input = fs.readFileSync(filePath, 'utf8');
  const output = strip(input, {
    preserveNewlines: true,
    keepProtected: false,
  });

  if (output !== input) {
    fs.writeFileSync(filePath, output, 'utf8');
    return { changed: true };
  }
  return { changed: false };
}

let changedCount = 0;
let scannedCount = 0;
const changedFiles = [];

walk(repoRoot, (filePath) => {
  // Don't rewrite the script while it's running.
  if (path.resolve(filePath) === path.resolve(__filename)) return;

  scannedCount++;
  try {
    const res = stripFileComments(filePath);
    if (res.changed) {
      changedCount++;
      changedFiles.push(path.relative(repoRoot, filePath));
    }
  } catch (e) {
    // If a file can't be parsed by strip-comments, leave it as-is.
    // We'll print it so you can decide if it should be handled manually.
    console.warn(`WARN: Failed to process ${path.relative(repoRoot, filePath)}: ${e.message}`);
  }
});

console.log(`Scanned files: ${scannedCount}`);
console.log(`Changed files: ${changedCount}`);
if (changedFiles.length) {
  console.log('Modified:');
  for (const f of changedFiles) console.log(` - ${f}`);
}
