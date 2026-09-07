const input = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {
  const city = input.value.trim();

  if (city === "") {
    alert("Please enter a city");
    return;
  }

  document.getElementById("city").textContent = city;
  document.getElementById("temperature").textContent = "25°C";
  document.getElementById("description").textContent = "Weather available soon 🌤️";
});
