import { createMemo, createSignal, For, Show } from 'solid-js';
import { Icon } from '@geniusaisolutions/icons/solid';

import { getVisibleIconNames, totalIcons } from './ui.config.js';

export default function App() {
  const [query, setQuery] = createSignal('');
  const visibleNames = createMemo(() => getVisibleIconNames(query()));

  return (
    <main class="page">
      <section class="hero">
        <h1>Solid example</h1>
        <p class="lede">
          This app registers <code>allIcons</code> once with the Solid adapter and
          renders the full built-in catalog with native <code>{'<Icon />'}</code>
          usage.
        </p>
      </section>

      <section class="controls">
        <label for="query">Search icon names</label>
        <input
          id="query"
          type="search"
          value={query()}
          onInput={(event) => setQuery(event.currentTarget.value)}
          placeholder="search, loader-2, book, alert, google..."
        />
      </section>

      <p class="stats">
        {visibleNames().length} of {totalIcons} icons visible
      </p>

      <Show
        when={visibleNames().length > 0}
        fallback={<p class="empty">{`No icons match "${query()}"`}</p>}
      >
        <section class="grid">
          <For each={visibleNames()}>
            {(name) => (
              <article class="card">
                <div class="stage">
                  <Icon name={name} aria-label={name} size={24} />
                </div>
                <div class="copy">
                  <p>{name}</p>
                  <code>{`<Icon name="${name}" />`}</code>
                </div>
              </article>
            )}
          </For>
        </section>
      </Show>
    </main>
  );
}
