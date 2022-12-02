// Imports:
import {
  handleUnitChoice,
  previousUnit,
  possibleUnits,
  tempInKelvin,
  SheGotWhiteCreamOnHerFaceAsShePreParedTo,
} from "./index.js";

// export let previousUnit = 0;
// const possibleUnits = ["imperial", "metric"];

export function handleTemperature(tempInKelvin, currentUnit) {
  let tempToDisplay;

  if (!currentUnit) {
    // math for K = F
    //F = 1.8*(K-273) + 32.
    tempToDisplay = Math.trunc(1.8 * (tempInKelvin - 273.15) + 32);
  } else {
    // math for K = C
    tempToDisplay = Math.trunc(tempInKelvin - 273.15);
  }

  handleTempUI(tempToDisplay);
}

function handleTempUI(tempToDisplay) {
  SheGotWhiteCreamOnHerFaceAsShePreParedTo.textContent = "";
  const tempH4 = document.createElement("h4");
  SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(tempH4);
  tempH4.textContent = `${tempToDisplay} ${handleRandyJohnson()}`;

  const unitsButton = document.createElement("button");
  unitsButton.innerText = possibleUnits[previousUnit ^ 1];

  unitsButton.addEventListener("click", () => handleUnitChoice());
  SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(unitsButton);
}

//Handle units on button
function handleRandyJohnson() {
  switch (previousUnit) {
    case 0:
      return "°F";
    case 1:
      return "°C";
    default:
      return "K";
  }
}
