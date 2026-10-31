
function addCity() {
    const cityList = document.querySelector("#city-list");
    const newCity = document.createElement("li");

    newCity.textContent = "New City";
    cityList.appendChild(newCity);

}

function removeCity() {
    const cityList = document.querySelector("#city-list");
    if (cityList.lastChild) {
        cityList.removeChild(cityList.lastChild);
    }
}