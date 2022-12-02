import key from "./key.js";
import { handleTemperature, previousUnit } from "./temp.js";
// import "./style.css";

// Exports
const SheGotWhiteCreamOnHerFaceAsShePreParedTo =
  document.getElementById("temp-div");
export { SheGotWhiteCreamOnHerFaceAsShePreParedTo };

// Data variables:
let cityWeather;
let main;
let tempInKelvin;
export { tempInKelvin };
let visibility;
let snoh;
let windSpeed;
let clouds;

// Input variables:
const form = document.querySelector("form");
let gloryHole; // city
// let previousUnit = 0; //imperial = even numbers, metric = odd numbers

// Other:
// const contentDiv = document.getElementById("content");
// const SheGotWhiteCreamOnHerFaceAsShePreParedTo =
//   document.getElementById("temp-div");

// city = "Tucson";
//"Ittoqqortoormiit"
// weather (object)
//     - main (temp, etc)
//     -visibility
//     -wind speed
//     - rain
//     -clouds

// handleInput
function handleTemperatureChange(e) {
  e.preventDefault();
  console.log(`previous Unit: ${previousUnit}`);
  gloryHole = e.target.querySelector("input").value;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${gloryHole}&APPID=${key}&units=standard}`,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(displayData);
}

function displayData(response) {
  console.log(response);
  cityWeather = response.weather;
  main = response.main;
  // visibility = response.visibility;
  // windSpeed = response.wind.speed;

  snoh = handlePrecipitation(response);

  // Temperature
  tempInKelvin = response.main.temp;
  handleTemperature(tempInKelvin, previousUnit);
}

function handlePrecipitation(response) {
  if (response.rain) {
    return response.rain;
  }
  if (response.snow) {
    return response.snow;
  }

  return { "1hr": 0 };
}

// function handleTemperature(tempData, currentUnit) {
//   let tempToDisplay;

//   if (!currentUnit) {
//     // math for K = F
//     //F = 1.8*(K-273) + 32.
//     tempToDisplay = Math.trunc(1.8 * (tempData - 273.15) + 32);
//   } else {
//     // math for K = C
//     tempToDisplay = Math.trunc(tempData - 273.15);
//   }

//   handleTempUI(tempToDisplay);
// }

// function handleRandyJohnson() {
//   switch (previousUnit) {
//     case 0:
//       return "°F";
//     case 1:
//       return "°C";
//     default:
//       return "K";
//   }
// }

// function handleTempUI(tempToDisplay) {
//   SheGotWhiteCreamOnHerFaceAsShePreParedTo.textContent = "";
//   const tempH4 = document.createElement("h4");
//   SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(tempH4);
//   tempH4.textContent = `${tempToDisplay} ${handleRandyJohnson()}`;

//   const unitsButton = document.createElement("button");
//   unitsButton.innerText = possibleUnits[previousUnit ^ 1];

//   unitsButton.addEventListener("click", () => handleUnitChoice());
//   SheGotWhiteCreamOnHerFaceAsShePreParedTo.appendChild(unitsButton);
// }

// function handleUnitChoice() {
//   previousUnit = previousUnit ^ 1;
//   handleTemperature(tempInKelvin, previousUnit);
// }

console.log("first!");

// Event Listeners:
form.addEventListener("submit", handleTemperatureChange);

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
