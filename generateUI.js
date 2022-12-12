// Imports:
import { packageTempUI } from "./temp.js";
import { packageConditionsUI } from "./conditions.js";
import { handleUnitChoice } from "./index.js";

// Module globals:
const CONTENT_DIV = document.getElementById("content");
const TEMP_DIV = document.getElementById("temp-div");
const CONDITIONS_DIV = document.getElementById("conditions-div");

export default function rebuildUI() {
  rebuildTempDiv();
  rebuildConditionsDiv();
}

function rebuildTempDiv() {
  // Nuke the children in the Div:
  TEMP_DIV.textContent = "";

  const TEMP_H3 = document.createElement("h3");
  TEMP_H3.textContent = "Current Temperature:";
  TEMP_DIV.appendChild(TEMP_H3);

  // Fetch tempUI Obj from temp module:
  const TEMP_UI_OBJ = packageTempUI();

  const TEMP_H4 = document.createElement("h4");
  TEMP_H4.textContent = TEMP_UI_OBJ.h4;
  TEMP_DIV.appendChild(TEMP_H4);

  const UNITS_BTN = document.createElement("button");
  UNITS_BTN.innerText = TEMP_UI_OBJ.buttonText;
  UNITS_BTN.addEventListener("click", () => handleUnitChoice());
  TEMP_DIV.appendChild(UNITS_BTN);
}

function rebuildConditionsDiv() {
  // Nuke the children in the Div:
  CONDITIONS_DIV.textContent = "";

  // Fetch conditionsUI obj from conditions module:
  const CONDITIONS_UI_OBJ = packageConditionsUI();

  const DESCRIPTION_H4 = document.createElement("h4");
  DESCRIPTION_H4.textContent = CONDITIONS_UI_OBJ.description.description;
  CONDITIONS_DIV.appendChild(DESCRIPTION_H4);

  const DESCRIPTION_ICON = document.createElement("img");
  DESCRIPTION_ICON.src = CONDITIONS_UI_OBJ.description.iconURL;
  CONDITIONS_DIV.appendChild(DESCRIPTION_ICON);

  const PRECIPITATION_H5 = document.createElement("h5");
  PRECIPITATION_H5.textContent = `Precipitation: ${CONDITIONS_UI_OBJ.precipitation}`;
  CONDITIONS_DIV.appendChild(PRECIPITATION_H5);

  const WIND_H5 = document.createElement("h5");
  WIND_H5.textContent = `Wind speed: ${CONDITIONS_UI_OBJ.wind}`;
  CONDITIONS_DIV.appendChild(WIND_H5);
}
