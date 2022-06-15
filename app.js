"use strict";

const nextDays = document.getElementById("nextdays");
const today = document.getElementById("today");
const nextWeek = document.getElementById("next-week");
const todayInfo = document.getElementById("today-info");
const searchButton = document.getElementById("search");
let input = document.getElementById("input");
let icon = document.getElementById("icon");
const mainContainer = document.getElementById("main-container");
const lowerContainer = document.getElementById("lower-container");

//

// WEATHER VARIABLES

const city = document.getElementById("city-name");
const condition = document.getElementById("condition");

const temp = document.getElementById("temp");
const htemp = document.getElementById("high-temp");
const ltemp = document.getElementById("low-temp");

// GETTING INPUT //
searchButton.addEventListener("click", (e) => {
  // GETTING INPUT!
  e.preventDefault();
  console.log(input.value);

  // API THINGS
  const apiId = "a3bab593ca134ad392c91730221206";
  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=${apiId}&q=${input.value}&aqi=no`;
  let forecast = `http://api.weatherapi.com/v1/forecast.json?key=${apiId}&q=${input.value}&aqi=no`;
  axios.get(forecast).then(showWeather);
  //axios.get(forecast).then(showForecast);

  // clearing input value:
  input.value = "";
});

const showWeather = (response) => {
  let data = response.data;
  console.log(response.data);
  //GETTING DATA FROM API:
  const newCity = data.location.name;
  const newCondition = data.current.condition.text;
  const newTemp = Math.floor(data.current.temp_c);
  const newHtemp = Math.floor(data.forecast.forecastday[0].day.maxtemp_c);
  const newLtemp = Math.floor(data.forecast.forecastday[0].day.mintemp_c);

  //UPDATE INFO IN HTML
  city.innerHTML = newCity;
  condition.innerHTML = newCondition;
  temp.innerHTML = `${newTemp}º`;
  htemp.innerHTML = `H ${newHtemp}º`;
  ltemp.innerHTML = `L ${newLtemp}º`;

  //changeIcon(newCondition);
};

const showForecast = (forecast) => {
  console.log(forecast);
};

// WEATHER CONDITION DESCRIPTIONS

const data = [
  [
    ["Sunny"],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    ["Clear"],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    ["Partly cloudy", "Cloudy", "Overcast"],
    { "main background": "orange", "forecast background": "light orange" },
  ],

  [
    [
      "Patchy rain possible",
      "Patchy light rain",
      "Light rain",
      "Light rain shower",
      "Moderate rain at times",
      "Moderate rain",
      "Light freezing rain",
    ],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    [
      "Heavy rain at times",
      "Heavy rain",
      "Moderate or heavy rain shower",
      "Torrential rain shower",
      "Moderate or heavy freezing rain",
    ],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    ["Mist", "Fog", "Freezing fog"],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    [
      "Patchy light rain with thunder",
      "Moderate or heavy rain with thunder",
      "Thundery outbreaks possible",
    ],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    [""],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    [
      "Patchy snow possible",
      "Patchy light snow",
      "Light snow",
      "Light snow showers",
      "Patchy moderate snow",
      "Moderate snow",
    ],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    ["Patchy heavy snow", "Heavy snow", "Moderate or heavy snow showers"],
    { "main background": "orange", "forecast background": "light orange" },
  ],
  [
    ["Patchy light snow with thunder", "Moderate or heavy snow with thunder"],
    { "main background": "orange", "forecast background": "light orange" },
  ],
];

//DE ESTA MANERA FUNCIONAAAAAAAAAAA
//Puedo hacer loop a través del array y buscar coincidencias en las descripciones
data.forEach((item) => {
  for (let i = 0; i < item[0].length; i++) {
    console.log(item[0][i]);
  }
});

// const changeIcon = (newCondition) => {
//   for (const key in descriptions) {
//     //console.log(descriptions[key].description);
//     for (let i = 0; i < Object.keys(descriptions).length; i++) {
//       console.log(i);
//       //console.log(Object.keys(descriptions).description.length);

//       //console.log(descriptions[key].description);
//     }
//     //if (newCondition === descriptions[key][i]) {
//     //icon.src = `./media/icons/${key}.svg`;
//     //console.log(key);
//     //console.log(icon);
//     //}
//     //}
//   }
// };

// changeIcon();
