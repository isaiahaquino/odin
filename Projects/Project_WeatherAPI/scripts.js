const WeatherReport = (() => {

    const appId = '6a0dbc1c4d85b3b4ea06c7304b1af7b9';
    const units = 'imperial';

    // First box
    let currentCity = 'honolulu';           // name
    let currentTemp = null;                 // main.temp
    let currentWeatherCondition = null;     // weather.main

    // Second box (list[0-7])
    let hourTemps = [];                     // list.main.temp
    let hourWeatherConditions = [];         // list.weather.main
    let hourTimes = [];                     // list.dt

    // Thirt box (list[3,11,19,27,35])
    const daysToShow = 5;
    let dayName = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    let dayTemps = [];                      // list.main.temp
    let dayWeatherConditions = [];          // list.weather.main
    let dayDay = [];                        // list.dt

    const outputDataTest = () => {
        console.log('Current:');
        console.log(`City: ${currentCity}; Temp: ${currentTemp}; Weather: ${currentWeatherCondition}`);

        console.log('Hourly:');
        console.log(`Hour: ${hourTimes} Temps: ${hourTemps}; Weathers: ${hourWeatherConditions}`);

        console.log('Days:');
        console.log(`Day: ${dayDay} Temps: ${dayTemps}; Weathers: ${dayWeatherConditions}`);
    }

    const parseResponseCurr = (response) => {
        currentCity = response.name;
        currentTemp = Math.round(response.main.temp);
        currentWeatherCondition = response.weather[0].main;
    }

    const parseResponseDays = (response) => {
        for (let i=0; i<8; i++) {
            hourTemps[i] = Math.round(response.list[i].main.temp);
            hourWeatherConditions[i] = response.list[i].weather[0].main;
            hourTimes[i] = new Date(response.list[i].dt * 1000).getUTCHours();
            hourTimes[i] = `${hourTimes[i]}:00`;
        }

        for (let i=0; i<5; i++) {
            let j = (i * 8) + 3;
            dayTemps[i] = Math.round(response.list[j].main.temp);
            dayWeatherConditions[i] = response.list[j].weather[0].main;
            dayDay[i] = new Date(response.list[j].dt * 1000).getDay();
            dayDay[i] = dayName[dayDay[i]];
        }
    }
    
    const getWeather = () => {

        // Current Weather API
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${appId}&units=${units}`, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(response => {
                parseResponseCurr(response);
            })
            .catch(error => {
                console.log("Error: " + error);
            });

        // 5 Day / 3 Hour API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=${appId}&units=${units}`, { mode: 'cors' })
            .then(response => {
                return response.json();
            })
            .then(response => {
                parseResponseDays(response);
                outputDataTest();
            })
            .catch(error => {
                console.log("Error: " + error);
            });

    }

    const changeCity = (newCity) => {
        currentCity = newCity;
    }

    return {getWeather, changeCity, outputDataTest};
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
