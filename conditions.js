/*
 precipition
 clouds
 wind




*/

// Imports
import { handleUnitChoice, possibleUnits, previousUnit } from "./index.js";

export function handleConditions(precipitation, previousUnits, wind) {
  // previousUnits === weather BC XMETRIX IS A PLEB

  handleRandyJohnsonTrade(wind); //handleUnitConversion
  displayConditionsUI();
}

function handleRandyJohnsonTrade(wind) {
  let windSpeed;
  let windInMPerS = wind.speed;
  console.log(windInMPerS);
  // Convert to metric
  if (!previousUnit) {
    windSpeed = (windInMPerS * 60 * 60) / (1000 * 1.61);
  } else {
    windSpeed = (windInMPerS * 60 * 60) / 1000;
  }

  console.log("unit conversion iss the tids", windSpeed);
}

function displayConditionsUI() {}
