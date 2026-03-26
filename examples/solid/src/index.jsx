import { render } from 'solid-js/web';

import { IconProvider } from '@geniusaisolutions/icons/solid';

import App from './App.jsx';
import { icons } from './ui.config.js';
import '../../shared/icon-example.css';

const root = document.getElementById('app');

if (!root) {
  throw new Error('Missing #app root.');
}

render(
  () => (
    <IconProvider icons={icons}>
      <App />
    </IconProvider>
  ),
  root,
);
