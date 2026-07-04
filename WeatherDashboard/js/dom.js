export function displayWeather(weather, elements) {

    elements.cityName.textContent = weather.city;

    elements.temperature.textContent = weather.temperature;

    elements.description.textContent = weather.description;

    elements.humidity.textContent = weather.humidity;

    elements.wind.textContent = weather.wind;

    elements.pressure.textContent = weather.pressure;

    elements.weatherIcon.src = weather.icon;

}