import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App />
);
