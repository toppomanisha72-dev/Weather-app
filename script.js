const input = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async function () {
  const city = input.value.trim();
document.getElementById("description").textContent = "Loading... ⏳";
  if (city === "") {
    alert("Please enter a city");
    return;
  }

  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );

  const locationData = await locationResponse.json();
  if (!locationData.results) {
  document.getElementById("city").textContent = "City not found ❌";
  document.getElementById("temperature").textContent = "";
  document.getElementById("description").textContent = "";
  return;
}

  const latitude = locationData.results[0].latitude;
  const longitude = locationData.results[0].longitude;
  const cityName = locationData.results[0].name;

  const weatherResponse = await fetch
(https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m
  const weatherData = await weatherResponse.json();

  document.getElementById("city").textContent = cityName;
  document.getElementById("temperature").textContent =
    weatherData.current.temperature_2m + "°C";
  const code = weatherData.current.weather_code;

let description = "Weather 🌤️";

if (code === 0) {
  description = "Clear sky ☀️";
} else if (code <= 3) {
  description = "Partly cloudy ⛅";
} else if (code <= 67) {
  description = "Rainy 🌧️";
} else if (code <= 77) {
  description = "Snowy ❄️";
} else if (code >= 80) {
  description = "Rain showers 🌦️";
}

document.getElementById("description").textContent = description;

document.getElementById("humidity").textContent =
  "Humidity: " + weatherData.current.relative_humidity_2m + "%";

document.getElementById("wind").textContent =
  "Wind Speed: " + weatherData.current.wind_speed_10m + " km/h";
});
