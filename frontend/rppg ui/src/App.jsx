import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

import DeepfakeDetector from "./components/fileupload";

import Home from "./components/home";




function App() {
  return (
    <Router>
      <Routes>
         
        <Route path="/upload" element={<DeepfakeDetector />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;

