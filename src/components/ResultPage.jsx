import React from "react";
import "../Style/style.css";

function ResultPage({ captureStatus, onRestart, onBack }) {
  return (
    <div className="result-page">
      <h2>Result</h2>
      <p>Capture Status: {captureStatus}</p>
      <div className="result-buttons">
        <button className="restart" onClick={onRestart}>
          Restart Game
        </button>
        <button className="back" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
}

export default ResultPage;
