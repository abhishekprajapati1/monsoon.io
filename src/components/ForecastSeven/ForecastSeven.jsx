import React, { Component } from 'react'
import './ForecastSeven.css'
class ForecastSeven extends Component {

  constructor(props) {
    super(props);
  }



  render() {
    return (
      <ul className='seven-forecast'>
        <p style={{paddingLeft:"20px"}}>Next 7 day forecast:</p>
        {
          this.props.sdata.map((elem, index) => {
            if (index > 0) {
              let date = new Date(elem.dt * 1000);
              let day = date.getDay();
              let c_date = date.getDate();
              let month = date.getMonth();
              let monthName = "";
              console.log(elem);
              let dayName = "";
              switch (day) {
                case 0:
                  dayName = "Sun"
                  break;
                case 1:
                  dayName = "Mon"
                  break;
                case 2:
                  dayName = "Tue"
                  break;
                case 3:
                  dayName = "Wed"
                  break;
                case 4:
                  dayName = "Thu"
                  break;
                case 5:
                  dayName = "Fri"
                  break;
                case 6:
                  dayName = "Sat"
                  break;
              }
              switch (month) {
                case 0:
                  monthName = "Jan"
                  break;
                case 1:
                  monthName = "Feb"
                  break;
                case 2:
                  monthName = "Mar"
                  break;
                case 3:
                  monthName = "Apr"
                  break;
                case 4:
                  monthName = "May"
                  break;
                case 5:
                  monthName = "Jun"
                  break;
                case 6:
                  monthName = "Jul"
                  break;
                case 7:
                  monthName = "Aug"
                  break;
                case 8:
                  monthName = "Sep"
                  break;
                case 9:
                  monthName = "Oct"
                  break;
                case 10:
                  monthName = "Nov"
                  break;
                case 11:
                  monthName = "Dec"
                  break;
              }
              return (
                <li key={elem.dt}>
                  <p>{dayName}, {c_date} {monthName}</p>
                  <img title={elem.weather[0].description}  src={"http://openweathermap.org/img/wn/" + elem.weather[0].icon + "@2x.png"} alt="" />
                  <p>{elem.temp.day}°C</p>
                </li>
              )
            }
          })
        }
      </ul>
    )
  }
}

export default ForecastSeven