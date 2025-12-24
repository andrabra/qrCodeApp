import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { BrowserRouter, HashRouter } from 'react-router';
import Layout from './components/Layout/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Layout />
    </HashRouter>
  </StrictMode>
);
