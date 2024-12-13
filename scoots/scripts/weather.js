const apiKey = '0bf22adbe31a733f1c198821a8a22c7e'; // Replace with your OpenWeatherMap API Key
const cityId = '3530103'; // Cozumel's City ID

async function fetchWeatherData() {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${apiKey}`);
  const data = await response.json();

  const today = data.list[0];
  const tomorrow = data.list.find(item => item.dt_txt.includes('15:00:00'));

  // Current Weather
  document.getElementById('current-temp').innerText = today.main.temp.toFixed(1);
  document.getElementById('humidity').innerText = today.main.humidity;
  document.getElementById('temp-max').innerText = today.main.temp_max.toFixed(1);

  // Tomorrow's Forecast
  document.getElementById('forecast-temp').innerText = tomorrow.main.temp.toFixed(1);

  // Weather Details
  const weatherDetails = today.weather.map(w => `
    <p>
      <strong>${w.main}:</strong> ${w.description} 
      <img class="weather-icon" src="http://openweathermap.org/img/wn/${w.icon}@2x.png" alt="${w.description}">
    </p>
  `).join('');
  document.getElementById('weather-details').innerHTML = weatherDetails;
}

function closeMessage() {
  document.querySelector('.message').style.display = 'none';
}

fetchWeatherData();