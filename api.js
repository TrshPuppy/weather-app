// Imports
// import * as dotenv from "dotenv";
import key from "./key.js";
import { delegateResponseData } from "./index.js";

// dotenv.config();

// Module globals:
let gloryHole; // city

// handleInput
export default function fetchDataFromAPI(e) {
  e.preventDefault();

  // City input:
  gloryHole = e.target.querySelector("input").value;

  // Build coordinate request URL:
  const coordsRequestURL = `https://api.openweathermap.org/data/2.5/weather?q=${gloryHole}&APPID=${key}&units=standard}`;

  fetch(coordsRequestURL, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(getDataUsingCoords);

  function getDataUsingCoords(response) {
    const requestCoordinates = {
      lattitude: response.coord.lat,
      longitude: response.coord.lon,
    };

    // Build data request URL:
    const dataRequestURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${requestCoordinates.lattitude}&lon=${requestCoordinates.longitude}&appid=${key}`;

    fetch(dataRequestURL)
      .then(function (response) {
        return response.json();
      })
      .then(delegateResponseData);
  }
}
