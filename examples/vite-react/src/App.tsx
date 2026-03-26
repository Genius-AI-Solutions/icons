import { useState, useCallback, useRef } from 'react';

import { Icon } from '@geniusaisolutions/icons/react';

import { iconNames, totalIcons, categories } from './ui.config';
import './styles.css';

function normalizeQuery(value: string) {
  return value.trim().toLowerCase();
}

type IconSize = 20 | 24 | 32 | 40;

export default function App() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [iconSize, setIconSize] = useState<IconSize>(24);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [copiedName, setCopiedName] = useState<string | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const normalized = normalizeQuery(query);

  const baseNames = activeCategory
    ? categories.find((c) => c.label === activeCategory)?.names ?? []
    : iconNames;

  const visibleNames = normalized
    ? baseNames.filter((name) => name.includes(normalized))
    : baseNames;

  const handleCopy = useCallback((name: string) => {
    void navigator.clipboard.writeText(`<Icon name="${name}" />`);
    setCopiedName(name);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setCopiedName(null), 1500);
  }, []);

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`} data-testid="app-root">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <Icon name="sparkles" size={22} aria-hidden />
            <span className="brand-name">GeniusAI Icons</span>
            <span className="badge">{totalIcons}</span>
          </div>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode((d) => !d)}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            data-testid="theme-toggle"
          >
            <Icon name={darkMode ? 'sun' : 'moon'} size={18} />
          </button>
        </div>
      </header>

      <main className="page">
        <section className="hero" data-testid="hero">
          <h1 className="hero-title">
            Explore the full icon set
          </h1>
          <p className="hero-sub">
            {totalIcons} hand-crafted icons across {categories.length} categories.
            Lightweight, tree-shakeable, and framework-agnostic.
          </p>
        </section>

        <section className="toolbar" data-testid="toolbar">
          <div className="search-wrap">
            <Icon name="search" size={18} className="search-icon" />
            <input
              id="query"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search icons..."
              className="search-input"
              data-testid="search-input"
            />
          </div>

          <div className="toolbar-controls">
            <div className="size-control">
              <label htmlFor="icon-size">Size</label>
              <select
                id="icon-size"
                value={iconSize}
                onChange={(e) => setIconSize(Number(e.target.value) as IconSize)}
                data-testid="size-select"
              >
                <option value={20}>20px</option>
                <option value={24}>24px</option>
                <option value={32}>32px</option>
                <option value={40}>40px</option>
              </select>
            </div>

            <div className="stroke-control">
              <label htmlFor="stroke-width">Stroke</label>
              <input
                id="stroke-width"
                type="range"
                min={1}
                max={3}
                step={0.25}
                value={strokeWidth}
                onChange={(e) => setStrokeWidth(Number(e.target.value))}
                data-testid="stroke-slider"
              />
              <span className="stroke-value">{strokeWidth}</span>
            </div>
          </div>
        </section>

        <section className="category-bar" data-testid="category-bar">
          <button
            className={`cat-chip ${activeCategory === null ? 'active' : ''}`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.label}
              className={`cat-chip ${activeCategory === cat.label ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.label === activeCategory ? null : cat.label)}
            >
              {cat.label}
              <span className="cat-count">{cat.names.length}</span>
            </button>
          ))}
        </section>

        <p className="stats" data-testid="stats">
          {visibleNames.length} of {totalIcons} icons
          {activeCategory ? ` in ${activeCategory}` : ''}
          {normalized ? ` matching "${query}"` : ''}
        </p>

        {visibleNames.length === 0 ? (
          <div className="empty-state" data-testid="empty-state">
            <Icon name="search" size={48} className="empty-icon" />
            <p>No icons match &ldquo;{query}&rdquo;</p>
            <button className="clear-btn" onClick={() => { setQuery(''); setActiveCategory(null); }}>
              Clear filters
            </button>
          </div>
        ) : (
          <section className="grid" data-testid="icon-grid">
            {visibleNames.map((name) => (
              <button
                key={name}
                className={`card ${copiedName === name ? 'copied' : ''}`}
                onClick={() => handleCopy(name)}
                title={`Copy <Icon name="${name}" />`}
                data-testid={`icon-card-${name}`}
              >
                <div className="stage">
                  <Icon
                    name={name}
                    aria-label={name}
                    size={iconSize}
                    strokeWidth={strokeWidth}
                  />
                </div>
                <span className="card-label">{name}</span>
                <span className="card-copied">Copied!</span>
              </button>
            ))}
          </section>
        )}
      </main>

      <footer className="page-footer">
        <p>@geniusaisolutions/icons &middot; MIT License</p>
      </footer>
    </div>
  );
}
