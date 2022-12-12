// Imports:
import { handleUnitChoice, currentUnit, possibleUnits } from "./index.js";

// Module globals:
let tempToDisplay;
let tempInKelvin;

export default function setTempValues(response) {
  tempInKelvin = response.list[0].main.temp;
  tempToDisplay = convertToCurrentTempUnit();
}

export function updateTempValues() {
  tempToDisplay = convertToCurrentTempUnit();
}

function convertToCurrentTempUnit() {
  let tempToDisplay;

  if (!currentUnit) {
    // math for K = F
    //F = 1.8*(K-273) + 32.
    tempToDisplay = Math.trunc(1.8 * (tempInKelvin - 273.15) + 32);
  } else {
    // math for K = C
    tempToDisplay = Math.trunc(tempInKelvin - 273.15);
  }

  return tempToDisplay;
}

export function packageTempUI() {
  const TEMP_UI_OBJ = {
    h4: `${tempToDisplay} ${setTempUnitToDisplay()}`,
    buttonText: possibleUnits[currentUnit ^ 1],
  };

  // Return an object:
  return TEMP_UI_OBJ;
}

// Handle units on button
function setTempUnitToDisplay() {
  switch (currentUnit) {
    case 0:
      return "°F";
    case 1:
      return "°C";
    default:
      return "K";
  }
}
