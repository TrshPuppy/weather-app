// Imports
import fetchDataFromAPI from "./api.js";
import setTempValues, {
  updateTempValues,
  setTempUnitToDisplay,
} from "./temp.js";
import { handleConditions } from "./conditions.js";
import rebuildUI from "./generateUI.js";

// Exports
export let currentUnit = 0;
export const possibleUnits = ["imperial", "metric"];

// Data variables:
export { wind, snoh, weather };
let snoh;
let wind;
let weather;

// Input variables:
const form = document.querySelector("form");

// Functions
export function delegateResponseData(response) {
  console.log(response);

  // Temperature
  setTempValues(response);

  // Conditions
  snoh = handlePrecipitation(response);
  weather = response.list[0].weather;
  wind = response.list[0].wind;
  // handleConditions();

  rebuildUI();
}

export function handleUnitChoice() {
  currentUnit = currentUnit ^ 1;
  updateTempValues();
  rebuildUI();
}

function handlePrecipitation(response) {
  if (response.list[0].main.rain) {
    return response.list[0].main.rain;
  }
  if (response.list[0].main.snow) {
    return response.list[0].main.snow;
  }
  return { "1hr": 0 };
}

// Event Listeners:
form.addEventListener("submit", fetchDataFromAPI);

// const testData = {
//   coord: {
//     lon: 10.99,
//     lat: 44.34,
//   },
//   weather: [
//     {
//       id: 501,
//       main: "Rain",
//       description: "moderate rain",
//       icon: "10d",
//     },
//   ],
//   base: "stations",
//   main: {
//     temp: 298.48,
//     feels_like: 298.74,
//     temp_min: 297.56,
//     temp_max: 300.05,
//     pressure: 1015,
//     humidity: 64,
//     sea_level: 1015,
//     grnd_level: 933,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 0.62,
//     deg: 349,
//     gust: 1.18,
//   },
//   rain: {
//     "1h": 3.16,
//   },
//   clouds: {
//     all: 100,
//   },
//   dt: 1661870592,
//   sys: {
//     type: 2,
//     id: 2075663,
//     country: "IT",
//     sunrise: 1661834187,
//     sunset: 1661882248,
//   },
//   timezone: 7200,
//   id: 3163858,
//   name: "Zocca",
//   cod: 200,
// };

// let returnObj = {
//   city: testData.name,
//   weather: testData.weather,
//   visibility: testData.visibility,
//   wind: testData.wind,
//   rain: testData.rain,
//   clouds: testData.clouds,
// };

// // Globals
// const form = document.querySelector("form");
// const city = document.getElementById("city");

// // Fucntions
// function handleInput(e) {
//   console.log(e.target.value);
//   // let newCity = e.target.city;
//   // if (city.validity.valid) {
//   //   console.log(e);
//   // }
//   // } else {
//   //   showError(city, cityError);
//   // }
// }

// function showError(city, cityError) {
//   console.log("bye");
// }

// // Event Listeners
// city.addEventListener("input", handleInput);

// /*
// - make a form
// - possible datapoints:
//     - weather (object)
//     - main (temp, etc)
//     -visibility
//     -wind speed
//     - rain
//     -clouds

// Weather App:
// - display city
// - current temp
// - current weather
// - wind speed
// - clouds
// -
// */
