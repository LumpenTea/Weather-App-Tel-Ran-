import { error, weather } from "./weatherSlice"

export const fetchWeatherAction = city => dispatch => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8c35a023dcef2533ffbfbe385919688&units=metric`)
        .then(response => response.json())
        .then(data => {
            dispatch(weather({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                pressure: data.main.pressure,
                sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
                message: null
            }))
        })
        .catch(dispatch(error()));
}