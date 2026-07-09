import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files.push(...(await walk(p)));
    else if (/\.(astro|ts|tsx)$/.test(e.name)) files.push(p);
  }
  return files;
}

let changed = 0;
for (const file of await walk('src')) {
  const text = await readFile(file, 'utf8');
  const next = text.replace(/href="(\/[^"]*?)"/g, (m, href) => {
    if (href.startsWith('/#') || href.includes('.') || href.includes('?') || href.includes('#')) {
      return m;
    }
    if (href.endsWith('/')) return m;
    return `href="${href}/"`;
  });
  if (next !== text) {
    await writeFile(file, next);
    changed++;
    console.log('updated', file);
  }
}
console.log('files changed', changed);
