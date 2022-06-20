const WeatherReport = (() => {

    const appId = '6a0dbc1c4d85b3b4ea06c7304b1af7b9';

    // First box
    let currentCity = 'honolulu';
    let currentTemp = null;                 // list.main.temp
    let currentWeatherCondition = null;     // list.weather.main

    // Second box
    let hourTemps = [];                     //
    let hourWeatherConditions = [];         //
    let hourTimes = [];                     //

    // Thirt box 
    const daysToShow = 5;
    let dayTemps = [];                      //
    let dayWeatherConditions = [];          //
    let dayDay = [];                        //


    
    const getWeather = () => {

        // Current Weather API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${appId}`, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("Error: " + error);
            });

        // 5 Day / 3 Hour API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${appId}`, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log("Error: " + error);
            });
    }

    const changeCity = (newCity) => {
        currentCity = newCity;
    }

    return {getWeather, changeCity};
})();

const DisplayControl = (() => {

    const inputField = document.querySelector('#searchInput');

    const search = (event) => {
        event.preventDefault();
        WeatherReport.changeCity(inputField.value);
        inputField.value = '';
        WeatherReport.getWeather();
    }

    return {search};
})();

WeatherReport.getWeather();
// WeatherReport.getWeatherAsync();

