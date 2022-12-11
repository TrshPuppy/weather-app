// Imports:
import { handleUnitChoice, currentUnit, possibleUnits } from "./index.js";

// Module globals:
let tempToDisplay;

export default function setTempValues(response) {
  const TEMP_IN_KELVIN = response.list[0].main.temp;

  tempToDisplay = convertToCurrentTempUnit(TEMP_IN_KELVIN);
}

export function convertToCurrentTempUnit(tempInKelvin) {
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
  // SheGotWhiteCreamOnHerFaceAsShePreParedTo.textContent = "";
  // const tempH4 = document.createElement("h4");
  // SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(tempH4);
  // tempH4.textContent = `${tempToDisplay} ${handleRandyJohnson()}`;

  // const unitsButton = document.createElement("button");
  // unitsButton.innerText = possibleUnits[previousUnit ^ 1];

  // unitsButton.addEventListener("click", () => handleUnitChoice());
  // SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(unitsButton);

  const TEMP_UI_OBJ = {
    h4: `${tempToDisplay} ${handleUnitBtnText()}`,
    buttonText: possibleUnits[currentUnit ^ 1],
    buttonEventListener: {
      listener: "click",
      callback: handleUnitChoice(),
    },
  };

  // Return an object:
  return TEMP_UI_OBJ;
}

// Handle units on button
export function handleUnitBtnText() {
  switch (currentUnit) {
    case 0:
      return "°F";
    case 1:
      return "°C";
    default:
      return "K";
  }
}
