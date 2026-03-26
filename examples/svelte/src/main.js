import { mount } from 'svelte';

import App from './App.svelte';
import '../../shared/icon-example.css';

const root = document.getElementById('app');

if (!root) {
  throw new Error('Missing #app root.');
}

mount(App, {
  target: root,
});
