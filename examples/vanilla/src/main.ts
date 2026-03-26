import { defineIcons, getIconSvgString } from '@geniusaisolutions/icons';
import { allIcons } from '@geniusaisolutions/icons/registries';
import './styles.css';

const icons = defineIcons(allIcons);
const iconNames = Object.keys(icons).sort((left, right) => left.localeCompare(right));
const totalIcons = iconNames.length;

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const app = document.getElementById('app');

if (!app) {
  throw new Error('Missing #app root.');
}

app.innerHTML = `
  <main class="page">
    <section class="hero">
      <h1>Vanilla browser example</h1>
      <p class="lede">
        This app uses the framework-neutral core only. It registers
        <code>allIcons</code> once and renders the full built-in catalog with
        <code>getIconSvgString()</code>.
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

    <p id="stats" class="stats">${totalIcons} of ${totalIcons} icons visible</p>
    <section id="grid" class="grid"></section>
  </main>
`;

const queryElement = document.getElementById('query');
const statsElement = document.getElementById('stats');
const gridElement = document.getElementById('grid');

if (!(queryElement instanceof HTMLInputElement)) {
  throw new Error('Missing query input.');
}

if (!statsElement) {
  throw new Error('Missing stats element.');
}

if (!gridElement) {
  throw new Error('Missing grid container.');
}

const queryInput = queryElement;
const stats = statsElement;
const grid = gridElement;

function renderGrid() {
  const normalized = normalizeQuery(queryInput.value);
  const visibleNames = normalized
    ? iconNames.filter((name) => name.includes(normalized))
    : iconNames;

  stats.textContent = `${visibleNames.length} of ${totalIcons} icons visible`;

  if (visibleNames.length === 0) {
    grid.innerHTML = `<p class="empty">No icons match "${escapeHtml(queryInput.value)}"</p>`;
    return;
  }

  grid.innerHTML = visibleNames
    .map((name) => {
      const markup =
        getIconSvgString(icons, name, {
          size: 24,
          'aria-label': name,
        }) ?? '';

      return `
        <article class="card">
          <div class="stage">${markup}</div>
          <div class="copy">
            <p>${escapeHtml(name)}</p>
            <code>getIconSvgString(icons, '${escapeHtml(name)}')</code>
          </div>
        </article>
      `;
    })
    .join('');
}

queryInput.addEventListener('input', renderGrid);
renderGrid();
