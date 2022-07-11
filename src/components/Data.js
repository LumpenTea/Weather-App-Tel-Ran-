import React from 'react'
import { api_key, base_url } from '../units/constants';
import Form from './Form';
import Weather from './Weather';

class Data extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: {
        temp: null,
        city: null,
        country: null,
        pressure: null,
        sunset: null,
        message: 'Enter city name'
      }
    }
  }

  getWeather = async (city) => {
    try {
      const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
      const data = await response.json();
      this.setState({
        weatherInfo: {
          temp: data.main.temp,
          city: data.name,
          country: data.sys.country,
          pressure: data.main.pressure,
          sunset: data.sys.sunset,
          message: null
        }
      });
    } catch (error) {
      this.setState({
        WeatherInfo: {
          message: 'Enter correct city name'
        }
      })
    }
  }

  render() {
    return (
      <div>
        <Form getWeather={this.getWeather} />
        <Weather info={this.state.weatherInfo} />
      </div >
    )
  }

}

export default Data;