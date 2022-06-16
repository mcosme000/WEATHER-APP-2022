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
  changeIcon(newCondition);
};

const showForecast = (forecast) => {
  console.log(forecast);
};

// WEATHER CONDITION DESCRIPTIONS

const data = [
  [
    ["Sunny"],
    {
      icon: "sunny",
      "main background": "#A3C2FF",
      "forecast background": "#A3C2FF",
      "font color": "#fff",
    },
  ],
  [
    ["Clear"],
    {
      icon: "clear",
      "main background": "#32509D",
      "forecast background": "#32509D",
      "font color": "#fff",
    },
  ],
  [
    ["Partly cloudy"],
    {
      icon: "partlyCloudy",
      "main background": "#C4C4C4",
      "forecast background": "#C4C4C4",
      "font color": "#000",
    },
  ],
  [
    ["Cloudy", "Overcast"],
    {
      icon: "cloudy",
      "main background": "#C4C4C4",
      "forecast background": "#C4C4C4",
      "font color": "#000",
    },
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
    {
      icon: "rainy",
      "main background": "#92A1BD",
      "forecast background": "#92A1BD",
      "font color": "#fff",
    },
  ],
  [
    [
      "Heavy rain at times",
      "Heavy rain",
      "Moderate or heavy rain shower",
      "Torrential rain shower",
      "Moderate or heavy freezing rain",
    ],
    {
      icon: "heavyRain",
      "main background": "#92A1BD",
      "forecast background": "#92A1BD",
      "font color": "#fff",
    },
  ],
  [
    ["Mist", "Fog", "Freezing fog"],
    {
      icon: "mist",
      "main background": "#D9D9D9",
      "forecast background": "#D9D9D9",
      "font color": "#000",
    },
  ],
  [
    [
      "Patchy light rain with thunder",
      "Moderate or heavy rain with thunder",
      "Thundery outbreaks possible",
    ],
    {
      icon: "thunder",
      "main background": "#8382B0",
      "forecast background": "#8382B0",
      "font color": "#fff",
    },
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
    {
      icon: "snow",
      "main background": "orange",
      "forecast background": "light orange",
    },
  ],
  [
    ["Patchy heavy snow", "Heavy snow", "Moderate or heavy snow showers"],
    {
      icon: "heavySnow",
      "main background": "orange",
      "forecast background": "light orange",
    },
  ],
  [
    ["Patchy light snow with thunder", "Moderate or heavy snow with thunder"],
    {
      icon: "snowThunder",
      "main background": "orange",
      "forecast background": "light orange",
    },
  ],
];

//console.log(data[0][1]["main background"]);

//DE ESTA MANERA FUNCIONAAAAAAAAAAA
//Puedo hacer loop a través del array y buscar coincidencias en las descripciones

const changeIcon = (newCondition) => {
  data.forEach((item) => {
    for (let i = 0; i < item[0].length; i++) {
      //console.log(item[0][i]); //con esto saco todas las descripciones!
      if (newCondition === item[0][i]) {
        console.log(newCondition);
        console.log(item[1]["icon"]);
        icon.src = `./media/icons/${item[1]["icon"]}.svg`;
        mainContainer.style.backgroundColor = item[1]["main background"];
        document.body.style.color = item[1]["font color"];
      }
    }
  });
};
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
