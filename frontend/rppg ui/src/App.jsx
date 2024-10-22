import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import FileUpload from "./components/fileupload";
import Result from "./components/results";




function App() {
  return (
    <Router>
      <Routes>
         
        <Route path="/upload" element={<FileUpload />} />
        <Route path="/result" element={<Result />} />
        
      </Routes>
    </Router>
  );
}

export default App;
