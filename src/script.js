const apiKey = "fffedo439f4e3b32aa77e7705tcc9366";

function temp(response) {
  //City
  let city = response.data.city;
  const cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = city;
  //Day
  let date = new Date(response.data.daily[0].time * 1000);
  const currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = formatDate(date);
  //Description
  let weatherDescription = response.data.daily[0].condition.description;
  const appDescription = document.querySelector("#description");
  appDescription.innerHTML = `${weatherDescription}`;
  //Humidity
  let dayHumidity = response.data.daily[0].temperature.humidity;
  const appHumidity = document.querySelector("#humidity");
  appHumidity.innerHTML = `${dayHumidity}%`;
  //Wind speed
  let dayWinds = response.data.daily[0].wind.speed;
  const appWindSpeed = document.querySelector("#wind_speed");
  appWindSpeed.innerHTML = `${dayWinds}km/h`;
  //Temp
  let dayTemp = response.data.daily[0].temperature.day;
  let appTemp = document.querySelector(".current-temperature-value");
  appTemp.innerHTML = Math.floor(dayTemp);
  //Temp icon
  let tempIcon = response.data.daily[0].condition.icon_url;
  let appIcon = document.querySelector(".current-temperature-icon");
  appIcon.innerHTML = `<img src="${tempIcon}" alt="temp icon"> `;
}



function formatDate(date) {
  //South African Time
  let localDate = new Date();
  let localMinutes = localDate.getMinutes();
  let localHours = localDate.getHours();
  let localDay = localDate.getDay();

  const time = {
    0:0,
    1:11,
    2:10,
    3:9,
    4:8,
    5:7,
    6:6,
    7:5,
    8:4,
    9:3,
    10:2,
    11:1,
    12:0,
    13:-1,
    14:-2,
    15:-3,
    16:-4,
    17:-5,
    18:-6,
    19:-7,
    20:-8,
    21:-9,
    22:-10,
    23:-11,
    24:0
  } 

  const dateHours = date.getHours();
  let adjustedHours = localHours;
  
 for (let a = 0; a < Object.keys(time).length; a++) {
    const key = Object.keys(time)[a];
    if(Number(key) === 0){
      localDay--;
    }
    if(Number(key) === 24){
      localDay++;
    }
    if (Number(key) === dateHours) {
      adjustedHours = localHours + Object.values(time)[a];
      break;
    }
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

  let formattedDay = days[localDay];

  if (localMinutes < 10){
    localMinutes = `0${localMinutes}`;
  }

  if (adjustedHours < 10){
    adjustedHours= `0${adjustedHours}`;
  }

  return `${formattedDay} ${adjustedHours}:${localMinutes}`;
}

function searchCity(city) {
  let apiURL = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(temp);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  searchCity(searchInputElement.value);
}


let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchSubmit);

searchCity("Pretoria");



