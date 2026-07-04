export async function getWeather(city, apiKey) {

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message);
    }

    return data;
}