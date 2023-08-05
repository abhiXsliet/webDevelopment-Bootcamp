console.log("Taking a sneak peek regarding API's");

const API_KEY = "0fa329fce41061d7f2bdf7ec877726c4";

function renderWeatherInfo(data) {

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara);
}
    //Example-1
async function fetchWeatherDetails() {

    try{
        let city = "goa";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
        const data = await response.json();

        console.log("weather data:-> ", data);
        renderWeatherInfo(data);
    }
    catch(err) {
        //handle the error here
        console.log("Error Found ", err);
    }
    //https://api.openweathermap.org/data/2.5/weather?lat=57&lon=-2.15&appid={API key}&units=metric
}

    //Example-2
async function getCustomWeatherDetails() {

    try{
        let latitude = 15.6333;
        let longitude = 18.3333;
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    
        let data = await result.json();
    
        console.log("Weather Details :-> ", data);
        renderWeatherInfo(data);
    }
    catch(err) {
        console.log("Error Detected ", data);
    }
}

function switchTab(clickedTab) {
    
    apiErrorContainer.classList.remove("active");

    if(clickedTab !== currentTab) {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    

        if(!searchForm.classList.contains("active")) {
            userInfoContainer.classList.remove("active");
            grantAccessContainer.classList.remove("active");
            searchForm.classList.add("active");
        }
        else{
            searchForm.classList.remove("active");
            userInfoContainer.classList.remove("active");
            getFromSessionStorage();
        }
        console.log("Current Tab", currentTab);
    }
}

function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        console.log("No Location Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}








