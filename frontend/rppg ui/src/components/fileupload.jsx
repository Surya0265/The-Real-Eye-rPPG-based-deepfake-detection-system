import React, { useState } from "react";
import axios from "axios";
import "./fileupload.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function FileUpload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [progress, setProgress] = useState(0);
  const [classification, setClassification] = useState("");
  const [isUploading, setIsUploading] = useState(false); // Control visibility

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
      setIsUploading(true); // Show progress and content container
      setProgress(1); // Start progress

      // Simulate actual upload process (update to 100)
      setTimeout(() => {
        setProgress(25);
      }, 1000); // Update after 1 second
      setTimeout(() => {
        setProgress(50);
      }, 2000); // Update after 2 seconds
      setTimeout(() => {
        setProgress(75);
      }, 3000); // Update after 3 seconds
      setTimeout(() => {
        setProgress(100);
      }, 4000); // Update to 100 after 4 seconds

      // Mocking the API call for upload
      const response = await axios.post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMessage("Upload complete!");
      setClassification(`Video Classification: ${response.data.classification}`);
    } catch (error) {
      setMessage("Error uploading video.");
      setProgress(0);
      setIsUploading(false); // Hide progress and content container if upload fails
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
      {/* Header */}
      <header className="header">
        <h1>The Real Eye</h1>
      </header>

      <div className="file-container">
        <label htmlFor="file-upload">
          Choose File to be checked 📷
          <input type="file" id="file-upload" onChange={handleFileChange} accept="video/*" />
        </label>
      </div>

      <button onClick={handleUpload}>Upload Video</button>

      <p>{message}</p>

      {/* Show progress and content container after upload starts and keep it visible */}
      {(isUploading || progress > 0) && (
        <>
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
        </>
      )}
    </div>
  );
}

export default FileUpload;