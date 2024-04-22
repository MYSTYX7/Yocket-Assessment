import React from "react";
import "../App.css";

function LandingPage({ onStartGame }) {
  return (
    <div className="LandingPage">
      {" "}
      {/* Add the LandingPage class to the container div */}
      <h1>Welcome to the Capture the Fugitive Game!</h1>
      <h2>Read Instructions carefully</h2>
      <h3>
        A notorious criminal escape artist has vanished again. However, the
        criminal may be hiding in only one of the possible 5 neighbouring
        cities. 3 fearless cops have volunteered in capturing the fugitive
        hiding and they need your help!
      </h3>
      <div className="gamplayInstruction">
        <h4>Gameplay:</h4>
        <table className="instructionTable">
          <thead>
            <tr>
              <th>Step</th>
              <th>Instructions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>City Selection</td>
              <td>
                Each cop independently chooses one city from below to
                investigate:
                <ul>
                  <li>Yapkashnagar - 60 KM</li>
                  <li>Lihaspur - 50 KM</li>
                  <li>Narmis City - 40 KM</li>
                  <li>Shekharvati - 30 KM</li>
                  <li>Nuravgram - 20 KM</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Vehicle Selection</td>
              <td>
                Based on the chosen city's distance, each cop selects an
                electric vehicle considering its range and availability:
                <table>
                  <thead>
                    <tr>
                      <th>Kind</th>
                      <th>Range</th>
                      <th>Count</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>EV Bike</td>
                      <td>60 KM</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>EV Car</td>
                      <td>100 KM</td>
                      <td>1</td>
                    </tr>
                    <tr>
                      <td>EV SUV</td>
                      <td>120 KM</td>
                      <td>1</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>Result</td>
              <td>
                The system determines if any cop successfully found the fugitive
                (simulated). If found, it displays the name of the cop who made
                the successful capture.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={onStartGame}>Start Game</button>
    </div>
  );
}

export default LandingPage;
