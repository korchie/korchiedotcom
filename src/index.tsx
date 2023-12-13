import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// google analytics stuff

const firebaseConfig = {
  apiKey: "AIzaSyA_vGHMfs-TkQ3p85q05axwVChHIn8CgME",
  authDomain: "korchiedotcom.firebaseapp.com",
  projectId: "korchiedotcom",
  storageBucket: "korchiedotcom.appspot.com",
  messagingSenderId: "884678409656",
  appId: "1:884678409656:web:5f11d99bec53b218f7e34d",
  measurementId: "G-052BQLFZQT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);