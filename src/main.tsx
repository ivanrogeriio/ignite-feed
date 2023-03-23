// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component
import { App } from './App';

// CSS
import './global.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
