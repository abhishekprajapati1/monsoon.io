import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import ForecastSeven from './components/ForecastSeven/ForecastSeven';
import Navbar from './components/navbar/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "Mumbai",
      query: "",
      c_response: {},
      sevenF_response: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.getForecast = this.getForecast.bind(this);
    this.getWeatherReport = this.getWeatherReport.bind(this);
    this.APIKEY = '6ff1648d640ad3c6260db1ab0fecd897';
  }



  // this function is called to get the report of current day
  async getWeatherReport(event) {
    if(event !== undefined){
      event.preventDefault();
    }

    try {
      let URI = `https://api.openweathermap.org/data/2.5/weather?q=${(this.state.query == "") ? this.state.city : this.state.query}&appid=${this.APIKEY}&units=metric`;
      const res = await fetch(URI);
      const data = await res.json();

      let lon = data.coord.lon;
      let lat = data.coord.lat;
      this.getForecast(lon, lat);


      this.setState({
        ...this.state, c_response:
        {
          name: data.name,
          temp: data.main.temp,
          country: data.sys.country,
          sunset: data.sys.sunset,
          sunrise: data.sys.sunrise,
          windspeed: data.wind.speed,
          cloud: data.weather[0].description,
          cloudIcon: data.weather[0].icon,
        }
      });
    } catch (error) {
      alert('"'+this.state.query+'"'+" is not a valid city name.")
    }
  }

  // this function is called to get the forecast for next 7 days.
  async getForecast(lon, lat) {
    let key = '6ff1648d640ad3c6260db1ab0fecd897';
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minute,hourly&appid=${key}&units=metric`;

    let res = await fetch(url);
    let data = await res.json();
    // console.log(data.daily);
    this.setState({
      ...this.state,
      sevenF_response: data.daily
    })

  }

  handleChange(e) {
    this.setState({
      query: e.target.value,
    })
  }
  render() {
    return (
      <div className='App'>
        <Navbar getReport={this.getWeatherReport} handleChange={this.handleChange}
          query={this.state.query} />
        <h1>Welcome to monsoon.io.</h1>
        <div className='response-container'>
          <CurrentWeather report={this.state.c_response} />
          <ForecastSeven sdata={this.state.sevenF_response} />
        </div>
      </div>
    )
  }
}

export default App
