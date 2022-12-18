/*
 precipition
 clouds
 wind




*/

// Imports
import { currentUnit } from "./index.js";

// Local globals:
let rawWind;
let rawPrecipitation;
let descriptionToDisplay;
let windToDisplay;
let precipitationToDisplay;

export default function setConditionsValues(response) {
  // Set description to display
  descriptionToDisplay = handleDescription(response);

  // Set wind values
  rawWind = response.list[0].wind.speed;
  windToDisplay = convertWindSpeed(rawWind);

  // Set precipitation values
  rawPrecipitation = response.list[0];
  let precipitation = handlePrecipitationType();
  precipitationToDisplay = convertPrecipitation(precipitation);
}

export function updateConditionsValues() {
  windToDisplay = convertWindSpeed();

  let precipitation = handlePrecipitationType();
  precipitationToDisplay = convertPrecipitation(precipitation);
}

function convertWindSpeed(rawWind) {
  // Convert to metric/ imperial
  if (!currentUnit) {
    windToDisplay = Math.trunc((rawWind * 60 * 60) / (1000 * 1.61));
  } else {
    windToDisplay = Math.trunc((rawWind * 60 * 60) / 1000);
  }

  return windToDisplay;
}

function handlePrecipitationType() {
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

function handleDescription(response) {
  let rawDescription = response.list[0].weather[0].description;

  let descObj = {
    "feels like": response.list[0].main.feels_like,
    description: rawDescription[0].toUpperCase() + rawDescription.substring(1),
    icon: response.list[0].weather[0].icon,
  };

  descObj.iconURL = `http://openweathermap.org/img/wn/${descObj.icon}@2x.png`;

  return descObj;
}

export function packageConditionsUI() {
  // Return object
  const CONDITIONS_PKG = {
    description: descriptionToDisplay,
    precipitation: precipitationToDisplay + (currentUnit ? " mm/hr" : " in/hr"),
    wind: windToDisplay + (currentUnit ? " meters/hr" : " miles/hr"),
  };

  return CONDITIONS_PKG;
}
