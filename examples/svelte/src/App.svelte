<script>
  import { Icon, IconProvider } from '@geniusaisolutions/icons/svelte';

  import { getVisibleIconNames, icons, totalIcons } from './ui.config.js';

  let query = '';

  $: visibleNames = getVisibleIconNames(query);
  $: emptyMessage = `No icons match "${query}"`;
</script>

<IconProvider {icons}>
  <main class="page">
    <section class="hero">
      <h1>Svelte example</h1>
      <p class="lede">
        This app registers <code>allIcons</code> once with the Svelte adapter and
        renders the full built-in catalog with native <code>&lt;Icon /&gt;</code>
        usage.
      </p>
    </section>

    <section class="controls">
      <label for="query">Search icon names</label>
      <input
        id="query"
        type="search"
        bind:value={query}
        placeholder="search, loader-2, book, alert, google..."
      />
    </section>

    <p class="stats">
      {visibleNames.length} of {totalIcons} icons visible
    </p>

    {#if visibleNames.length === 0}
      <p class="empty">{emptyMessage}</p>
    {:else}
      <section class="grid">
        {#each visibleNames as name}
          <article class="card">
            <div class="stage">
              <Icon name={name} size={24} aria-label={name} />
            </div>
            <div class="copy">
              <p>{name}</p>
              <code>{`<Icon name="${name}" />`}</code>
            </div>
          </article>
        {/each}
      </section>
    {/if}
  </main>
</IconProvider>
