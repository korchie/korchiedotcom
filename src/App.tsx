import React from 'react';
import './App.css';
import Name from './components/Name';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';
import Homepage from './components/Homepage';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from './components/Portfolio';
import Rugs from './components/Rugs';
import ContactMe from './components/ContactMe';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="rugs" element={<Rugs />} />
        <Route path="contactme" element={<ContactMe />} />


      </Routes>


    </div>
  );
}

export default App;
