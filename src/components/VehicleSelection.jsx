// VehicleSelection.js

import React from "react";
import "../Style/style.css";

function VehicleSelection({ onSelectVehicle, onBack }) {
  // Include onBack prop to handle back button click
  const vehicles = [
    { name: "EV Bike", image: require("../Image/EV-bike.png") },
    { name: "EV Car", image: require("../Image/EV-Car.png") },
    { name: "EV SUV", image: require("../Image/EV-SUV.png") },
  ];

  return (
    <div>
      <h2 className="vehicle-selection-heading">Vehicle Selection</h2>
      <div className="btn">
        <button className="back" onClick={onBack}>
          Back
        </button>
      </div>
      <div className="vehicle-cards">
        {vehicles.map((vehicle, index) => (
          <div key={index} className="vehicle-card">
            <img src={vehicle.image} alt={vehicle.name} />
            <button onClick={() => onSelectVehicle(vehicle.name)}>
              Select {vehicle.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VehicleSelection;
