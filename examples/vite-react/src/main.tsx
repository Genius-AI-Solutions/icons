import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { IconProvider } from '@geniusaisolutions/icons/react';

import App from './App';
import { icons } from './ui.config';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Missing #root element.');
}

createRoot(rootElement).render(
  <StrictMode>
    <IconProvider icons={icons}>
      <App />
    </IconProvider>
  </StrictMode>,
);
