import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import Layout from './components/Layout/Layout';
import './main.css';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout/Layout';
import QrCodeGenerator from './components/QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from './components/QrCodeScanner/QrCodeScanner';
import Navigation from './components/Navigation/Navigation';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  </StrictMode>
);
