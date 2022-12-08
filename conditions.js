/*
 precipition
 clouds
 wind




*/

// Imports
import {
  SheGotWhiteCreamOnHerFaceAsShePreParedTo,
  previousUnit,
  wind,
  snoh,
  weather,
} from "./index.js";

// Local globals:
let description;
let windSpeed;

export function handleConditions() {
  handleRandyJohnsonTrade(wind); //handleUnitConversion
  handleDescription(weather);
  displayConditionsUI(description);
}

function handleRandyJohnsonTrade(wind) {
  windSpeed;
  let windInMPerS = wind.speed;

  // Convert to metric/ imperial
  if (!previousUnit) {
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

function displayConditionsUI(description) {
  console.log(description);
}
