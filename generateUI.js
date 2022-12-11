// Imports:
import { packageTempUI } from "./temp.js";
import { packageConditionsUI } from "./conditions.js";

// Module globals:
const TEMP_DIV = document.getElementById("temp-div");
const CONDITIONS_DIV = document.getElementById("conditions-div");

export default function rebuildUI() {
  rebuildTempDiv();
  rebuildConditionsDiv();
}

function rebuildTempDiv() {
  // Nuke the children in the Div:
  TEMP_DIV.textContent = "";

  // Fetch tempUI Obj from temp module:
  const TEMP_UI_OBJ = packageTempUI();

  const TEMP_H4 = document.createElement("h4");
  TEMP_H4.textContent = TEMP_UI_OBJ.h4;
  TEMP_DIV.appendChild(TEMP_H4);

  const UNITS_BTN = document.createElement("button");
  UNITS_BTN.innerText = TEMP_UI_OBJ.buttonText;
  UNITS_BTN.addEventListener(
    TEMP_UI_OBJ.buttonEventListener.listener,
    () => TEMP_UI_OBJ.buttonEventListener.callback
  );
  TEMP_DIV.appendChild(UNITS_BTN);
}

function rebuildConditionsDiv() {
  // Nuke the children in the Div:
  CONDITIONS_DIV.textContent = "";

  // Fetch conditionsUI obj from conditions module:
  const CONDITIONS_UI_OBJ = packageConditionsUI();
}
