import React, { useState } from "react";
import "../Style/style.css"; // Import the CSS file

function CitySelection({ onSelectCity, onBack }) {
  const [selectedCity, setSelectedCity] = useState(null); // State to track selected city

  // Function to handle city selection
  const handleSelectCity = (city) => {
    setSelectedCity(city);
  };

  // Function to handle cop selection
  const handleSelectCop = (cop) => {
    // Proceed to the next page upon selecting a cop
    onSelectCity(selectedCity + " - " + cop);
  };

  // Data structure with cities and their respective image paths
  const cities = [
    {
      name: "Yapkashnagar",
      image: require("../Image/Yapkashnagar.png"),
      description: "Glowing alleys and rooftop races, powered by solar energy.",
    },
    {
      name: "Lihaspur",
      image: require("../Image/Lihaspur.png"),
      description:
        "Ancient temples shrouded in fog, whispers of forgotten tech.",
    },
    {
      name: "Narmis City",
      image: require("../Image/Narmis-City.png"),
      description: "Towering skyscrapers and hidden underground networks.",
    },
    {
      name: "Shekharvati",
      image: require("../Image/Shekharvati.png"),
      description: "Rolling hills and forgotten mining tunnels.",
    },
    {
      name: "Nuravgram",
      image: require("../Image/Nuravgram.png"),
      description: "Talking robots and malfunctioning AI guardians.",
    },
  ];

  // Data structure with cops and their respective image paths
  const cops = [
    { name: "Cop1", image: require("../Image/Cop1.png") },
    { name: "Cop2", image: require("../Image/Cop2.png") },
    { name: "Cop3", image: require("../Image/Cop3.png") },
  ];

  return (
    <div>
      {/* City Selection or Cop Selection Heading */}
      {selectedCity === null ? (
        <h2 className="city-selection-heading">City Selection</h2>
      ) : (
        <h2 className="city-selection-heading">Cop Selection</h2>
      )}

      <div className="btn">
        <button className="back" onClick={onBack}>
          Back
        </button>
      </div>

      {/* City or Cop Selection Cards */}
      <div className="city-cards">
        {/* Display city or cop selection buttons based on the selectedCity state */}
        {selectedCity === null ? (
          <div>
            {cities.map((city, index) => (
              <div key={index} className="city-card">
                <img src={city.image} alt={city.name} />
                <div>
                  <h3>{city.name}</h3>
                  <p>{city.description}</p>
                  <button onClick={() => handleSelectCity(city.name)}>
                    Select {city.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {cops.map((cop, index) => (
              <div key={index} className="cop-card">
                <img src={cop.image} alt={cop.name} />
                <button onClick={() => handleSelectCop(cop.name)}>
                  Select {cop.name}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Back Button */}
    </div>
  );
}

export default CitySelection;
