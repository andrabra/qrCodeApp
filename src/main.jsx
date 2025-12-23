import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.css';
import { BrowserRouter } from 'react-router';
import Layout from './components/Layout/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
