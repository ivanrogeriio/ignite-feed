// React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Component
import { Home } from './pages/Home/Home';

// CSS
import './global.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
