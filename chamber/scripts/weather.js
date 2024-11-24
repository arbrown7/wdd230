// Constants and API configuration
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastContainer = document.getElementById('forecast');

const latitude = 40.2281220450482; // Latitude of Newtown, PA
const longitude = -74.93186390371517; // Longitude of Newtown, PA
const apiKey = '0bf22adbe31a733f1c198821a8a22c7e';
const units = 'imperial';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Fetch data from OpenWeatherMap API
async function fetchWeatherData() {
    const response = await fetch(url);
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

async function fetchForecastData() {
    const response = await fetch(forecastUrl);
    if (!response.ok) throw new Error(await response.text());
    return response.json();
}

// Display current weather
function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

// Display 3-day forecast
function displayForecast(data) {
    const forecastDays = data.list.filter((item, index) => index % 8 === 0).slice(0, 3); // 3 days

    forecastContainer.innerHTML = ""; // Clear previous content

    forecastDays.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";

        const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: 'long' });
        const temp = `${Math.round(day.main.temp)}°F`;
        const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        const desc = day.weather[0].description;

        dayDiv.innerHTML = `
            <p>${date}</p>    
            <figure>
                <img src="${iconsrc}" alt="${desc}">
            </figure>
            <p>Temp: ${temp}</p>
        `;

        forecastContainer.appendChild(dayDiv);
    });
}

// Error display
function displayError(message) {
    forecastContainer.innerHTML = `<p class="error">Unable to load forecast: ${message}</p>`;
}

// Main API fetch logic
async function apiFetch() {
    try {
        const [currentWeather, forecastData] = await Promise.all([fetchWeatherData(), fetchForecastData()]);
        displayResults(currentWeather);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching data:', error);
        displayError(error.message);
    }
}

// Run the fetch after DOM loads
document.addEventListener('DOMContentLoaded', apiFetch);
