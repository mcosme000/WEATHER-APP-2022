"use strict";

const nextdays = document.getElementById("nextdays");
const today = document.getElementById("today");
const nextWeek = document.getElementById("next-week");
const todayInfo = document.getElementById("today-info");
const searchButton = document.getElementById("search");
const city = document.getElementById("input");

nextdays.addEventListener("click", () => {
  nextWeek.classList.remove("hidden");
  todayInfo.classList.add("hidden");
});

today.addEventListener("click", () => {
  todayInfo.classList.remove("hidden");
  nextWeek.classList.add("hidden");
});

// API THINGS

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(city.value);
  city.value = "";
  const apiId = "7814e5944f598a9e5f5e2d1de4cadb44";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q="London"&appid=${apiId}&units=metric`;
  axios.get(apiUrl).then(showWeather);
});

const showWeather = (response) => {
  console.log(response);
};
