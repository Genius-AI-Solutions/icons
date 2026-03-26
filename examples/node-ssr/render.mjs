import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { defineIcons, getIconSvgString } from '@geniusaisolutions/icons';
import { allIcons } from '@geniusaisolutions/icons/registries';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, 'dist');
const outputFile = path.join(distDir, 'index.html');

const icons = defineIcons(allIcons);
const iconNames = Object.keys(icons).sort((left, right) => left.localeCompare(right));

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const directoryMarkup = iconNames
  .map((name) => {
    const svg = getIconSvgString(icons, name, {
      size: 24,
      'aria-label': name,
    });

    if (!svg) {
      throw new Error(`Missing metadata icon: ${name}`);
    }

    return `
      <article class="card" data-name="${escapeHtml(name.toLowerCase())}">
        <div class="stage">${svg}</div>
        <div class="copy">
          <p>${escapeHtml(name)}</p>
          <code>getIconSvgString(icons, '${escapeHtml(name)}')</code>
        </div>
      </article>
    `;
  })
  .join('');

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>@geniusaisolutions/icons Node example</title>
    <style>
      :root {
        color: #18282c;
        font-family: "Trebuchet MS", "Segoe UI", sans-serif;
        background: linear-gradient(180deg, #f7f3eb 0%, #ede7dc 100%);
      }
      * { box-sizing: border-box; }
      body { margin: 0; min-height: 100vh; }
      code { font-family: "Consolas", "Courier New", monospace; }
      .page { margin: 0 auto; max-width: 1180px; padding: 40px 20px 64px; }
      .hero { display: grid; gap: 12px; margin-bottom: 20px; }
      .hero h1, .hero p, .stats, .copy p, .copy code { margin: 0; }
      .hero p, .stats, .copy code {
        color: #5b676d;
        line-height: 1.6;
      }
      .controls {
        display: grid;
        gap: 8px;
        margin-bottom: 18px;
      }
      .controls label {
        font-size: 0.82rem;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }
      .controls input {
        width: min(360px, 100%);
        border: 1px solid rgba(24, 40, 44, 0.14);
        border-radius: 14px;
        background: rgba(255, 255, 255, 0.86);
        color: inherit;
        padding: 12px 14px;
      }
      .grid {
        display: grid;
        gap: 14px;
        grid-template-columns: repeat(auto-fit, minmax(148px, 1fr));
      }
      .card {
        display: grid;
        gap: 12px;
        padding: 14px;
        border: 1px solid rgba(24, 40, 44, 0.12);
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.82);
        box-shadow: 0 16px 48px rgba(24, 40, 44, 0.08);
      }
      .stage {
        display: grid;
        place-items: center;
        min-height: 78px;
        border-radius: 14px;
        background: rgba(32, 129, 110, 0.08);
        color: #20816e;
      }
      .copy {
        display: grid;
        gap: 6px;
      }
      .copy p { font-weight: 700; }
      .copy code { overflow-wrap: anywhere; }
      .empty { color: #5b676d; }
    </style>
  </head>
  <body>
    <main class="page">
      <section class="hero">
        <h1>Node rendering example</h1>
        <p>
          This script writes a static HTML directory from Node using the
          framework-neutral core only. It renders every icon from
          <code>allIcons</code> with <code>getIconSvgString()</code>.
        </p>
      </section>

      <section class="controls">
        <label for="query">Search icon names</label>
        <input
          id="query"
          type="search"
          placeholder="search, loader-2, book, alert, google..."
        />
      </section>

      <p id="stats" class="stats">${iconNames.length} of ${iconNames.length} icons visible</p>
      <section id="grid" class="grid">${directoryMarkup}</section>
    </main>
    <script>
      const query = document.getElementById('query');
      const stats = document.getElementById('stats');
      const cards = Array.from(document.querySelectorAll('.card'));

      function render() {
        const normalized = query.value.trim().toLowerCase();
        let visibleCount = 0;

        for (const card of cards) {
          const name = card.dataset.name ?? '';
          const visible = normalized === '' || name.includes(normalized);
          card.hidden = !visible;

          if (visible) {
            visibleCount += 1;
          }
        }

        stats.textContent = visibleCount + ' of ${iconNames.length} icons visible';
      }

      query.addEventListener('input', render);
      render();
    </script>
  </body>
</html>`;

await mkdir(distDir, { recursive: true });
await writeFile(outputFile, html, 'utf8');

console.log(`Wrote ${outputFile}`);
