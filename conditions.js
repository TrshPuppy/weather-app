/*
 precipition
 clouds
 wind




*/

// Imports
import {
  handleUnitChoice,
  possibleUnits,
  previousUnit,
  wind,
  snoh,
  weather,
} from "./index.js";

// Local globals:
let deescription;
let windSpeed;

export function handleConditions() {
  // previousUnits === weather BC XMETRIX IS A PLEB
  // console.log("snoh:", snoh);
  // console.log("weather:", weather);

  handleRandyJohnsonTrade(wind); //handleUnitConversion
  handleDescription(weather);
  displayConditionsUI();
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
  const icon = getConditionsIcon(weather.description);

  deescription = {
    conditions: weather[0].description,
    icon: icon,
    precipitaion: snoh,
    wind: windSpeed,
  };
  console.log(description);
}

function getConditionsIcon(conditions) {}

function displayConditionsUI() {}
