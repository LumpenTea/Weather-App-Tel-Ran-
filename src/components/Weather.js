import React from 'react'

const Weather = ({info}) => {
  if(info.message){
    return (
      <div className='infoWeath'>
        <p>{info.message}</p>
      </div>
    )
  }else {
    return (
      <div className='infoWeath'>
        <p>Location: {info.country}, {info.city}</p>
        <p>Temp: {info.temp}</p>
        <p>Pressure: {info.pressure}</p>
        <p>Sunset: {new Date(info.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    )
  }
  
}

export default Weather