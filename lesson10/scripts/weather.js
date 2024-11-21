// Select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const latitude = 49.749992; // Latitude of Trier, Germany
const longitude = 6.637143; // Longitude of Trier, Germany
const apiKey = '0bf22adbe31a733f1c198821a8a22c7e'; // Replace with your API key
const units = 'imperial';

// Construct the full URL with query parameters
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;

// Define the asynchronous function
async function apiFetch() {
  try {
    // Fetch data from the API
    //console.log("I try");
    const response = await fetch(url);

    // Check if the response is OK
    if (response.ok) {
      const data = await response.json(); // Parse JSON data
      //console.log(data); // Output the data to the console for testing
      displayResults(data);
    } else {
      throw new Error(await response.text()); // Throw an error with the response text
    }
  } catch (error) {
    console.error('Error fetching data:', error); // Output any error to the console
  }
}

function displayResults(data) {
    // Display the current temperature
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  
    // Construct the icon URL
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
    // Get the weather description
    let desc = data.weather[0].description;
  
    // Set the attributes for the weather icon
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
  
    // Set the text content for the description
    captionDesc.textContent = `${desc}`;
}
 
document.addEventListener('DOMContentLoaded', apiFetch);


