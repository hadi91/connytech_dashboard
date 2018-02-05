import React from 'react';

class TemperatureData extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fat: '',
      assembly: '',
      demo: '',
      office: ''
    }
  }


  componentWillMount(){
    fetch('https://api.apixu.com/v1/forecast.json?key=aa02673228fd486d862142655180202&q=Singapore')
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      this.setState({
        fat: data.forecast.forecastday[0].day.avgtemp_c,
        assembly: data.forecast.forecastday[0].day.maxtemp_c,
        demo: data.forecast.forecastday[0].day.mintemp_c,
        office: data.forecast.forecastday[0].day.maxwind_kph
      })
    }).catch((error)=>console.log(error))
  }


  render(){
    return (
      <div className="temperatureData data-box">
        <h4>Room Temperature</h4>
        <ul>
          <li>L1 FAT Area: <span>{this.state.fat}&deg;C</span></li>
          <li>L1 Assembly Area: <span>{this.state.assembly}&deg;C</span></li>
          <li>L2 Demo Room: <span>{this.state.demo}&deg;C</span></li>
          <li>L2 Office Area: <span>{this.state.office}&deg;C</span></li>
        </ul>
      </div>
    )
  }
}


export default TemperatureData;
