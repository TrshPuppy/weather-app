/*
 precipition
 clouds
 wind




*/

// Imports
import { currentUnit, wind, snoh, weather } from "./index.js";

// Local globals:
let description;
let windSpeed;

export function handleConditions() {
  convertWindSpeed(wind);
  handleDescription(weather);
}

function convertWindSpeed(wind) {
  windSpeed;
  let windInMPerS = wind.speed;

  // Convert to metric/ imperial
  if (!currentUnit) {
    windSpeed = Math.trunc((windInMPerS * 60 * 60) / (1000 * 1.61));
  } else {
    windSpeed = Math.trunc((windInMPerS * 60 * 60) / 1000);
  }
}

function handleDescription(weather) {
  const iconCode = weather[0].icon;

  let iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  description = {
    conditions: weather[0].description,
    icon: iconURL,
    precipitaion: snoh,
    wind: windSpeed,
  };
}

export function packageConditionsUI() {
  // Return object
  const CONDITIONS_PKG = {};
  // Conditions
}
