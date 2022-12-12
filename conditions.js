/*
 precipition
 clouds
 wind




*/

// Imports
import { currentUnit, wind, snoh, weather } from "./index.js";

// Local globals:
let description;
let windInMPerS;
let windToDisplay;
let precipitaionToDisplay;

export function setConditionsValues(response) {
  // Set description to display
  // handleDescription(weather);

  // Set wind values
  windInMPerS = response.list[0].wind.speed;
  windToDisplay = convertWindSpeed(windInMPerS);

  // Set precipitation values
  let rawPrecipitation = response.list[0];

  let precipitation = handlePrecipitation(rawPrecipitation);

  precipitaionToDisplay = convertPrecipitation(precipitation);
}

function convertWindSpeed(windInMPerS) {
  // Convert to metric/ imperial
  if (!currentUnit) {
    windToDisplay = Math.trunc((windInMPerS * 60 * 60) / (1000 * 1.61));
  } else {
    windToDisplay = Math.trunc((windInMPerS * 60 * 60) / 1000);
  }

  return windToDisplay;
}

function handlePrecipitation(rawPrecipitation) {
  if (rawPrecipitation.rain) {
    return rawPrecipitation.rain;
  }
  if (rawPrecipitation.snow) {
    return rawPrecipitation.snow;
  }
  return { "1hr": 0 };
}

function convertPrecipitation(precipitationInMM) {
  let precipitationPerHR;

  if (precipitationInMM["3h"]) {
    precipitationPerHR = precipitationInMM["3h"] / 3;
  } else {
    precipitationPerHR = precipitationInMM["1h"];
  }

  if (!currentUnit) {
    return (precipitationPerHR * 0.0393).toFixed(2);
  }
  return precipitationPerHR.toFixed(2);
}

function handleDescription(weather) {
  const iconCode = weather[0].icon;

  let iconURL = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

  description = {
    conditions: weather[0].description,
    icon: iconURL,
    precipitaion: snoh,
    wind: windToDisplay,
  };
}

export function packageConditionsUI() {
  // Return object
  const CONDITIONS_PKG = {};
  // Conditions
}
