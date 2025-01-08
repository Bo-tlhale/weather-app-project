let now = new Date();
let day = now.getDay();
const apiKey = "fffedo439f4e3b32aa77e7705tcc9366";

function temp(response) {
  //Description
  let weatherDescription = response.data.daily[day].condition.description;
  const appDescription = document.querySelector("#description");
  appDescription.innerHTML = `${weatherDescription}`;
  //Humidity
  let dayHumidity = response.data.daily[day].temperature.humidity;
  const appHumidity = document.querySelector("#humidity");
  appHumidity.innerHTML = `${dayHumidity}%`;
  //Wind speed
  let dayWinds = response.data.daily[day].wind.speed;
  const appWindSpeed = document.querySelector("#wind_speed");
  appWindSpeed.innerHTML = `${dayWinds}km/h`;
  //Temp
  let dayTemp = response.data.daily[day].temperature.day;
  let appTemp = document.querySelector(".current-temperature-value");
  appTemp.innerHTML = Math.floor(dayTemp);
  //Temp icon
  let tempIcon = response.data.daily[day].condition.icon_url;
  let appIcon = document.querySelector(".current-temperature-icon");
  appIcon.innerHTML = `<img src="${tempIcon}" alt="temp icon"> `;
}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let city = searchInputElement.value;
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiURL).then(temp);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);
