const weather = {

    city: "Hyderabad",

    temperature: "34°C",

    description: "Sunny",

    humidity: "65%",

    wind: "10 km/h",

    pressure: "1008 hPa",

    icon: "https://openweathermap.org/img/wn/01d@2x.png"

};


function displayWeather(weather) {

    cityName.textContent = weather.city;

    temperature.textContent = weather.temperature;

    description.textContent = weather.description;

    humidity.textContent = weather.humidity;

    wind.textContent = weather.wind;

    pressure.textContent = weather.pressure;

    weatherIcon.src = weather.icon;

}

displayWeather(weather);

function showError(message) {

    errorMessage.textContent = message;

    errorMessage.classList.remove("hidden");

}

showError("Please enter city");

function hideError() {

    errorMessage.classList.add("hidden");

}

temperature.style.color = "red";
temperature.style.fontSize = "60px";
description.style.fontWeight = "bold";

const loader = document.querySelector("#loader");

function showLoader() {

    loader.classList.remove("hidden");

}
function hideLoader() {

    loader.classList.add("hidden");

}

const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchBtn");

function validateInput(city) {

    if (city === "") {

        showError("Please enter city name");

        return false;

    }

    hideError();

    return true;

}

function searchWeather() {

    let city = cityInput.value.trim();

    if (!validateInput(city))
        return;

    const weather = {

        city: city,

        temperature: "34°C",

        description: "Sunny",

        humidity: "65%",

        wind: "10 km/h",

        pressure: "1008 hPa",

        icon:
        "https://openweathermap.org/img/wn/01d@2x.png"

    };

    displayWeather(weather);

}

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchWeather();

    }

});
