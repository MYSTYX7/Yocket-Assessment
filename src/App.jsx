import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import CitySelection from "./components/CitySelection";
import VehicleSelection from "./components/VehicleSelection";
import ResultPage from "./components/ResultPage";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [captureStatus, setCaptureStatus] = useState("");
  const [pageHistory, setPageHistory] = useState([]);

  const handleStartGame = () => {
    setPageHistory([...pageHistory, currentPage]);
    setCurrentPage("citySelection");
  };

  const handleSelectCity = (city) => {
    setPageHistory([...pageHistory, currentPage]);
    setSelectedCity(city);
    setCurrentPage("vehicleSelection");
  };

  const handleSelectVehicle = (vehicle) => {
    setPageHistory([...pageHistory, currentPage]);
    setSelectedVehicle(vehicle);
    handleResult();
  };

  const handleResult = () => {
    setPageHistory([...pageHistory, currentPage]);
    const captureStatus = Math.random() < 0.5 ? "Success" : "Failure";
    setCaptureStatus(captureStatus);
    setCurrentPage("result");
  };

  const handleRestart = () => {
    setPageHistory([...pageHistory, currentPage]);
    setSelectedCity("");
    setSelectedVehicle("");
    setCaptureStatus("");
    setCurrentPage("landing");
  };

  const handleBack = () => {
    const previousPage = pageHistory.pop() || "landing";
    setCurrentPage(previousPage);
    setPageHistory([...pageHistory]);
  };

  return (
    <div className="App">
      {currentPage === "landing" && (
        <LandingPage onStartGame={handleStartGame} />
      )}
      {currentPage === "citySelection" && (
        <CitySelection onSelectCity={handleSelectCity} onBack={handleBack} />
      )}
      {currentPage === "vehicleSelection" && (
        <VehicleSelection
          onSelectVehicle={handleSelectVehicle}
          onBack={handleBack}
        />
      )}
      {currentPage === "result" && (
        <ResultPage
          captureStatus={captureStatus}
          onRestart={handleRestart}
          onBack={handleBack}
        />
      )}{" "}
    </div>
  );
}

export default App;
