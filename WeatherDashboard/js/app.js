import { loadConfig } from "./config.js";

import { getWeather } from "./weatherService.js";

import {
    showLoader,
    hideLoader,
    showError,
    hideError
}
from "./ui.js";

import { displayWeather }
from "./dom.js";


const API_KEY = await loadConfig();

const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchBtn");

const cityName = document.querySelector("#cityName");
const temperature = document.querySelector("#temperature");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const pressure = document.querySelector("#pressure");
const weatherIcon = document.querySelector("#weatherIcon");

const loader = document.querySelector("#loader");
const errorMessage = document.querySelector("#errorMessage");

const elements = {

    cityName,

    temperature,

    description,

    humidity,

    wind,

    pressure,

    weatherIcon

};

async function searchWeather() {

    const city = cityInput.value.trim();

    if (!city) {

        showError(errorMessage, "Please enter city.");

        return;

    }

    hideError(errorMessage);

    showLoader(loader);

    try {

        const data =
            await getWeather(city, API_KEY);

        const weather = {

            city: data.name,

            temperature: `${Math.round(data.main.temp)}°C`,

            description: data.weather[0].description,

            humidity: `${data.main.humidity}%`,

            wind: `${data.wind.speed} m/s`,

            pressure: `${data.main.pressure} hPa`,

            icon:
            `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

        };

        displayWeather(weather, elements);

    }
    catch (error) {

        showError(errorMessage, error.message);

    }
    finally {

        hideLoader(loader);

    }

}

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        searchWeather();

    }

});