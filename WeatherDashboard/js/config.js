export async function loadConfig() {

    const response = await fetch("./config/key.json");

    if (!response.ok) {
        throw new Error("Unable to load API Key.");
    }

    const config = await response.json();

    return config.apiKey;
}