const nextdays = document.getElementById("nextdays");
const today = document.getElementById("today");
const nextWeek = document.getElementById("next-week");
const todayInfo = document.getElementById("today-info");

nextdays.addEventListener("click", () => {
  nextWeek.classList.remove("hidden");
  todayInfo.classList.add("hidden");
});

today.addEventListener("click", () => {
  todayInfo.classList.remove("hidden");
  nextWeek.classList.add("hidden");
});
