const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");
const errorImage = document.querySelector(".error");

//initially 
let currentTab = userTab;
const API_KEY = "0fa329fce41061d7f2bdf7ec877726c4";
currentTab.classList.add("current-tab");
getfromSessionStorage();

function switchTab(clicked) {
    if(clicked != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clicked;
        currentTab.classList.add("current-tab");

        if(!searchForm.classList.contains("active")) { //if searchForm is invisible then making it visible
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else {
            //previously was on the searchForm and now make visible weather tab
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");

            //displaying weather from local storage coordinates
            getfromSessionStorage();
        }
    }
}

userTab.addEventListener("click", () => {
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    switchTab(searchTab);
});

//Check if coordinates are already present in session storage
function getfromSessionStorage() {
    const localCoordinates = sessionStorage.getItem("user-coordinates");

    if(!localCoordinates) {
        grantAccessContainer.classList.add("active");
    }
    else{
        const coordinates = JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordinates);
    }
}

async function fetchUserWeatherInfo(coordinates) {
    const {lat, lon} = coordinates;
    
    //make invisible grant access container
    grantAccessContainer.classList.remove("active");
    //make loader visible
    loadingScreen.classList.add("active");

    //API CALL
    try{
        const response = await fetch (
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
        );
        const data  = await response.json();

        //make invisible loader
        loadingScreen.classList.remove("active");
        userInfoContainer.classList.add("active");
        renderWeatherInfo(data);
    }
    catch(err) {
        alert("Coordinates invalid, try again");
        loadingScreen.classList.remove("active");
        grantAccessContainer.classList.add("active");

    }
} 

function renderWeatherInfo(weatherInfo) {
     
    //first, fetching all required the elements
    const cityName    = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc        = document.querySelector("[data-weatherDesc]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp        = document.querySelector("[data-temp]");
    const windspeed   = document.querySelector("[data-windspeed]");
    const humidity    = document.querySelector("[data-humidity]");
    const cloudiness  = document.querySelector("[data-cloudiness]");

    //fetch values from weatherInfo object and Put it in UI element
    cityName.innerText   = weatherInfo?.name;
    countryIcon.src      = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText       = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src      =  `https://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText       = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText  = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText   = `${weatherInfo?.main?.humidity} %`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all} %`;
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //showing an alert if no geolocation available
        alert("Your browser does not support geolocation");
    }
}

function showPosition(position) {
    const userCoordinates = {
        lat : position.coords.latitude,
        lon : position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const grantAccessButton = document.querySelector("[data-grantAccess]");
grantAccessButton.addEventListener("click", getLocation);

const searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let cityName = searchInput.value;

    if(cityName === "") 
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    userInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        const data = await response.json();

        // loadingScreen.classList.remove("active");
        // userInfoContainer.classList.add("active");
        // renderWeatherInfo(data);

        if(response.status == 404) {
            console.log(errror);
            loadingScreen.classList.add("active");
            errorImage.classList.add("active");
        }
        else{
            loadingScreen.classList.remove("active");
            userInfoContainer.classList.add("active");
            renderWeatherInfo(data);
            errorImage.classList.remove("active");
        }
    }
    catch(error) {
        console.log("Error occured: " + error);
        // loadingScreen.classList.add("active");
        // errorImage.classList.add("active");
    }
}