import React from 'react'
import { useSelector } from 'react-redux'

const Weather = () => {

  const { temp, city, country, pressure, sunset, message } = useSelector(state => state.weather.weatherInfo);

  return (
    <div className='infoWeath'>
      {!message &&
        <div>
          <p>Location: {country}, {city}</p>
          <p>Temp: {temp}</p>
          <p>Pressure: {pressure}</p>
          <p>Sunset: {sunset}</p>
        </div>}
      <p>{message}</p>
    </div>
  )
}

export default Weather