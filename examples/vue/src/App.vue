<script setup>
import { computed, ref } from 'vue';
import { Icon, IconProvider } from '@geniusaisolutions/icons/vue';

import { getVisibleIconNames, icons, totalIcons } from './ui.config.js';

const query = ref('');
const visibleNames = computed(() => getVisibleIconNames(query.value));
const emptyMessage = computed(() => `No icons match "${query.value}"`);
</script>

<template>
  <IconProvider :icons="icons">
    <main class="page">
      <section class="hero">
        <h1>Vue example</h1>
        <p class="lede">
          This app registers <code>allIcons</code> once with the Vue adapter and
          renders the full built-in catalog with native <code>&lt;Icon /&gt;</code>
          usage.
        </p>
      </section>

      <section class="controls">
        <label for="query">Search icon names</label>
        <input
          id="query"
          v-model="query"
          type="search"
          placeholder="search, loader-2, book, alert, google..."
        />
      </section>

      <p class="stats">
        {{ visibleNames.length }} of {{ totalIcons }} icons visible
      </p>

      <p v-if="visibleNames.length === 0" class="empty">
        {{ emptyMessage }}
      </p>
      <section v-else class="grid">
        <article v-for="name in visibleNames" :key="name" class="card">
          <div class="stage">
            <Icon :name="name" :size="24" :aria-label="name" />
          </div>
          <div class="copy">
            <p>{{ name }}</p>
            <code>{{ `<Icon name="${name}" />` }}</code>
          </div>
        </article>
      </section>
    </main>
  </IconProvider>
</template>
