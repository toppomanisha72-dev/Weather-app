const input = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async function () {
  const city = input.value.trim();

  if (city === "") {
    alert("Please enter a city");
    return;
  }

  const locationResponse = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
  );

  const locationData = await locationResponse.json();

  if (!locationData.results) {
    alert("City not found");
    return;
  }

  const latitude = locationData.results[0].latitude;
  const longitude = locationData.results[0].longitude;
  const cityName = locationData.results[0].name;

  const weatherResponse = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`
  );

  const weatherData = await weatherResponse.json();

  document.getElementById("city").textContent = cityName;
  document.getElementById("temperature").textContent =
    weatherData.current.temperature_2m + "°C";
  document.getElementById("description").textContent =
    "Current weather 🌤️";
});
