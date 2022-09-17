import React, { Component } from 'react'
import './CurrentWeather.css';
import cloudIcon from  '../clouds.png';
import sunRise from '../sunrise.png';
import sunSet from '../sunset.png';
import windIcon from '../winds.png';
import tempIcon from '../maxtemp.png';

const Card = (props)=>{
  return(
    <div className='card'>
      <img src={props.pic} alt="sunrise icon by icons8" />
      
      <p className="timing"><strong>{props.desc}:</strong> {props.val}</p>
    </div>
  )
}
class CurrentWeather extends Component {

  constructor(props){
    super(props);
    this.data = this.props.report;
  }


  getTime(seconds){
    let date = new Date(seconds*1000);
    let hours = (date.getHours()>12)?(date.getHours()-12):date.getHours();
    
    let time = `${hours} : ${date.getMinutes()}  ${(date.getHours()>12)?"pm":"am"}`;
    return time;
  }



  render() {
    return (
      <div className='c_container'>
        <div className="title">Now, In {this.props.report.name} ({this.props.report.country})</div>
        <div className="main-part">
          <img src={cloudIcon} alt="cloud icon by icons8" />
          <figcaption>
            {this.props.report.cloud}
          </figcaption>
        </div>
        <div className='other-info'>
          <Card pic={sunRise} val={this.getTime(this.props.report.sunrise)} desc="Sunrise" />
          <Card pic={sunSet} val={this.getTime(this.props.report.sunset)} desc="Sunset"/>
          <Card pic={windIcon} val={this.props.report.windspeed + " km/h"} desc="Windspeed"/>
          <Card pic={tempIcon} val={this.props.report.temp + " °C"} desc="Temperature"/>
        </div>
      </div>
    )
  }
}

export default CurrentWeather