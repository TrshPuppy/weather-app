// Imports
import fetchDataFromAPI from "./api.js";
import setTempValues, { updateTempValues } from "./temp.js";
import setConditionsValues, { updateConditionsValues } from "./conditions.js";
import rebuildUI from "./generateUI.js";

// dotenv.config();
// console.log(process.env.TEST);

// Exports
export let currentUnit = 0;
export const possibleUnits = ["Imperial", "Metric"];

// Input variables:
const form = document.querySelector("form");

// Functions
export function delegateResponseData(response) {
  console.log(response);

  // Temperature
  setTempValues(response);

  // Conditions
  setConditionsValues(response);

  rebuildUI();
}

export function handleUnitChoice() {
  currentUnit = currentUnit ^ 1;
  updateTempValues();
  updateConditionsValues();
  rebuildUI();
}

// Event Listeners:
form.addEventListener("submit", fetchDataFromAPI);
