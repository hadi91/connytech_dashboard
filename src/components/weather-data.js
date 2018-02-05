import React from 'react';

class weatherData extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      condition: '',
      humidity: '',
      sunrise: '',
      sunset: '',
      icon: ''
    }
  }


  componentWillMount(){
    fetch('https://api.apixu.com/v1/forecast.json?key=aa02673228fd486d862142655180202&q=Singapore')
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({
        condition: data.forecast.forecastday[0].day.condition.text,
        humidity: data.forecast.forecastday[0].day.avghumidity + '%',
        sunrise: data.forecast.forecastday[0].astro.sunrise,
        sunset: data.forecast.forecastday[0].astro.sunset,
        icon: 'https:' + data.forecast.forecastday[0].day.condition.icon
      })
    }).catch((error)=>console.log(error))
  }

  render(){
    return (
      <div className="weatherData data-box">
        <h4>Weather</h4>
        <ul>
          <li>{this.state.condition}</li>
          <li>Humidity: {this.state.humidity}</li>
          <li>Sunrise at: {this.state.sunrise}</li>
          <li>Sunset at: {this.state.sunset}</li>
        </ul>
        <img src={this.state.icon} alt="Weather Condition"/>
      </div>
    )
  }
}


export default weatherData;
