import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  let files = [];
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) files = files.concat(await walk(p));
    else if (e.name.endsWith('.astro')) files.push(p);
  }
  return files;
}

let n = 0;
for (const file of await walk('src')) {
  let t = await readFile(file, 'utf8');
  // Match href={`/path/${x}`} without trailing slash
  const next = t.replace(/href=\{`(\/[^`]*?)`\}/g, (m, href) => {
    if (href.endsWith('/')) return m;
    return 'href={`' + href + '/`}';
  });
  if (next !== t) {
    await writeFile(file, next);
    n++;
    console.log(file);
  }
}
console.log('changed', n);
