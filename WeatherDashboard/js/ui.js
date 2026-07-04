export function showLoader(loader) {

    loader.classList.remove("hidden");

}

export function hideLoader(loader) {

    loader.classList.add("hidden");

}

export function showError(errorElement, message) {

    errorElement.textContent = message;

    errorElement.classList.remove("hidden");

}

export function hideError(errorElement) {

    errorElement.classList.add("hidden");

}