  
const temperature = document.querySelector("#current-temp");
const icon = document.querySelector("#weather-icon");
const figcaption = document.querySelector("figcaption");
const threeDayForecastElement = document.getElementById('threeDayForecast');

const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=7.43&lon=3.91&units=imperial&appid=13eca19076dd918baa4c2bc2226accef'; 
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=ibadan,PT&units=metric&appid=13eca19076dd918baa4c2bc2226accef`; 


async function fetchWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching current weather:', error);
    }
}

async function fetchAndDisplayWeather() {
    try {
        const response = await fetch(forecastUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const weatherData = await response.json();
        displayForecast(weatherData);
    } catch (error) {
        console.error('Error fetching forecast:', error);
    }
}

function displayWeather(data) {
    temperature.textContent = Math.round(data.main.temp) + "°C";
    icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.alt = data.weather[0].description;
    figcaption.textContent = titleCase(data.weather[0].description);
}

function displayForecast(data) {
    threeDayForecastElement.innerHTML = ''; // Clear previous forecast data

    // Loop through the first three days of forecast data
    for (let i = 0; i < 3; i++) {
        const dayData = data.list[i * 8]; // Weather data for every 8th entry (3-hour intervals)
        const date = new Date(dayData.dt * 1000);
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        const iconUrl = `https://openweathermap.org/img/w/${dayData.weather[0].icon}.png`;
        const temperature = Math.round(dayData.main.temp);

        // Create a div element for each day's forecast
        const forecastItem = document.createElement('div');
        forecastItem.classList.add('forecast-item');
        forecastItem.innerHTML = `
            <p>${dayOfWeek}</p>
            <img src="${iconUrl}" alt="${dayData.weather[0].description}">
            <p>${temperature}°C</p>
        `;

        // Append the forecast item to the forecast container
        threeDayForecastElement.appendChild(forecastItem);
    }
}

function titleCase(str) {
    return str.toLowerCase().split(" ").map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
}

// Initial fetch and display of current weather
fetchWeather();

// Initial fetch and display of three-day forecast
fetchAndDisplayWeather();