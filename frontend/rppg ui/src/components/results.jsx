import React, { useState, useEffect } from "react";
import axios from "axios";
import "./results.css"; // Custom CSS for styling

function Result() {
  const [classification, setClassification] = useState("");
  const [plotImage, setPlotImage] = useState("");

  useEffect(() => {
    // Simulating an API call to the backend to fetch classification and image
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/result");
        
        // Assuming the backend sends classification and plot_image in the response
        setClassification(response.data.classification);
        setPlotImage(response.data.plot_image); // base64 image string from backend
      } catch (error) {
        console.error("Error fetching data from backend", error);
      }
    };

    fetchData();
  }, []); // Runs only on component mount

  return (
    <div className="App">
      <header className="header">
        <h1 className="title">The Real Eye</h1>
      </header>

      <div className="container">
        <h2 className="result-heading">Result Analysis</h2>
        <div className="result-card">
          <h3 className="classification">
            Classification: {classification || "Loading..."}
          </h3>

          {/* Render the image only if it's available */}
          {plotImage ? (
            <img
              className="result-image"
              src={`data:image/png;base64,${plotImage}`}
              alt="Plot Analysis"
            />
          ) : (
            <p>Loading image...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Result;
