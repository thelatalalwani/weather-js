const cityName = document.querySelector("#cityName");

const temperature = document.querySelector("#temperature");

const description = document.querySelector("#description");

const humidity = document.querySelector("#humidity");

const wind = document.querySelector("#wind");

const pressure = document.querySelector("#pressure");

const weatherIcon = document.querySelector("#weatherIcon");

function displayWeather() {

    cityName.textContent = "Hyderabad";

    temperature.textContent = "34°C";

    description.textContent = "Sunny";

    humidity.textContent = "65%";

    wind.textContent = "12 km/h";

    pressure.textContent = "1008 hPa";

    weatherIcon.src =
        "https://openweathermap.org/img/wn/10d@2x.png";
}

displayWeather();

temperature.style.color = "red";
temperature.style.fontSize = "60px";
description.style.fontWeight = "bold";

const loader = document.querySelector("#loader");

loader.classList.remove("hidden");
loader.classList.add("hidden");
