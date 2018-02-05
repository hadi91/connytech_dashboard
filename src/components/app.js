import React from 'react';
import '../styles/index.css'
import Navbar from './navbar.js';
import NavigationData from './navigation-data.js';
import ConsumptionData from './consumption-data.js';
import WeatherData from './weather-data.js';
import TemperatureData from './temperature-data.js';
import Switch from './switch.js';
import Floorplan from './floorplan.js';


class App extends React.Component {
  render(){
    return (
      <div className="app">
        <Navbar/>
        <div className="main-content">
          <Switch/>
          <Floorplan/>
            <div className="data">
            <NavigationData/>
            <ConsumptionData/>
            <WeatherData/>
            <TemperatureData/>
            </div>
        </div>

      </div>
    )
  }
}


export default App;
