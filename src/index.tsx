import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';

// Safeguard: fallback if env not loaded
const env = import.meta.env ?? {};  // fallback to empty object if undefined
const MEASUREMENT_ID = (env.VITE_GA_MEASUREMENT_ID as string) || 'G-052BQLFZQT';

console.log('Environment variables available:', env);               // ← Check this in browser console!
console.log('Using GA Measurement ID:', MEASUREMENT_ID);

// Initialize only if ID looks valid (prevents errors from bad ID)
if (MEASUREMENT_ID && MEASUREMENT_ID.startsWith('G-')) {
  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      anonymizeIp: true,
    },
  });

  ReactGA.send({
    hitType: 'pageview',
    page: window.location.pathname + window.location.search,
  });
} else {
  console.warn('Google Analytics skipped: Invalid or missing Measurement ID');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Optional: reportWebVitals if you still use it
reportWebVitals(console.log);