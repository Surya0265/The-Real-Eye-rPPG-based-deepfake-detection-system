import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [classification, setClassification] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
    setProgress(0);
    setClassification("");
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a video file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      setMessage("Uploading video...");
      setProgress(1); // Start progress

      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setProgress(100); // Completed
      setMessage("Upload complete!");
      setClassification(`Video Classification: ${response.data.classification}`);
    } catch (error) {
      setMessage("Error uploading video.");
      setProgress(0);
      console.error("There was an error!", error);
    }
  };

  const getProgressContent = () => {
    switch (true) {
      case progress >= 1 && progress < 25:
        return "Preparing to upload the video...";
      case progress >= 25 && progress < 50:
        return "Processing video frames for analysis...";
      case progress >= 50 && progress < 75:
        return "Running deepfake detection algorithms...";
      case progress >= 75 && progress < 100:
        return "Finalizing the analysis...";
      case progress === 100:
        return classification;
      default:
        return "Please start by uploading a video file.";
    }
  };

  const updateProgressBar = (step) => {
    switch (step) {
      case 1:
        setProgress(1);
        break;
      case 2:
        setProgress(25);
        break;
      case 3:
        setProgress(50);
        break;
      case 4:
        setProgress(75);
        break;
      case 5:
        setProgress(100);
        break;
      default:
        setProgress(0);
    }
  };

  return (
    <div className="App">
      <h1>Deepfake Detection</h1>
      <input type="file" onChange={handleFileChange} accept="video/*" />
      <button onClick={handleUpload}>Upload Video</button>
      <p>{message}</p>
      <div className="process-wrapper">
        <div id="progress-bar-container">
          <ul>
            <li
              className={`step step01 ${progress >= 1 ? "active" : ""}`}
              onClick={() => updateProgressBar(1)}
            >
              <div className="step-inner">Upload Started</div>
            </li>
            <li
              className={`step step02 ${progress >= 25 ? "active" : ""}`}
              onClick={() => updateProgressBar(2)}
            >
              <div className="step-inner">Processing Frames</div>
            </li>
            <li
              className={`step step03 ${progress >= 50 ? "active" : ""}`}
              onClick={() => updateProgressBar(3)}
            >
              <div className="step-inner">Deepfake Detection</div>
            </li>
            <li
              className={`step step04 ${progress >= 75 ? "active" : ""}`}
              onClick={() => updateProgressBar(4)}
            >
              <div className="step-inner">Finalizing</div>
            </li>
            <li
              className={`step step05 ${progress >= 100 ? "active" : ""}`}
              onClick={() => updateProgressBar(5)}
            >
              <div className="step-inner">Complete</div>
            </li>
          </ul>
          <div id="line">
            <div id="line-progress" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      </div>
      <div className="content-container">
        <p>{getProgressContent()}</p>
      </div>
    </div>
  );
}

export default App;




