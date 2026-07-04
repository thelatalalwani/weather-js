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

const cityInput = document.querySelector("#cityInput");
const searchButton = document.querySelector("#searchBtn");

searchButton.addEventListener("click", function () {

    console.log("Search button clicked");
    console.log(cityInput.value);

});

/*let city = cityInput.value.trim();

searchButton.addEventListener("click", function () {

    if (city === "") {

        alert("Please enter city name");

        return;
    }

    cityName.textContent = cityInput.value;

});

cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        cityName.textContent = cityInput.value;

    }

}); */ 

// much cleaner code below

function searchWeather(){

    let city = cityInput.value.trim();

    if(city === ""){

        alert("Please enter city");

        return;
    }

    cityName.textContent = city;

}

searchButton.addEventListener("click", searchWeather);

cityInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchWeather();

    }

});
