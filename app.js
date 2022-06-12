"use strict";

const nextDays = document.getElementById("nextdays");
const today = document.getElementById("today");
const nextWeek = document.getElementById("next-week");
const todayInfo = document.getElementById("today-info");
const searchButton = document.getElementById("search");
let input = document.getElementById("input");

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

  // CLEARING INPUT
  input.value = "";
});

const showWeather = (response) => {
  console.log(response);
  //GETTING DATA FROM API:
  const newCity = response.data.location.name;
  const newCondition = response.data.current.condition.text;
  const newTemp = Math.floor(response.data.current.temp_c);

  //UPDATE INFO IN HTML
  city.innerHTML = newCity;
  condition.innerHTML = newCondition;
  temp.innerHTML = `${newTemp}º`;

  //CREATING RANDOM HIGH & LOW TEMP VALUES (this weather api doesn't provide them)
  htemp.innerHTML = `H ${newTemp + Math.floor(Math.random() * 3)}º`;
  ltemp.innerHTML = `L ${newTemp - Math.floor(Math.random() * 3)}º`;
};

const showForecast = (forecast) => {
  console.log(forecast);
};

// HANDLE BOX SWITCH //
nextDays.addEventListener("click", () => {
  nextWeek.classList.remove("hidden");
  todayInfo.classList.add("hidden");
});

today.addEventListener("click", () => {
  todayInfo.classList.remove("hidden");
  nextWeek.classList.add("hidden");
});
