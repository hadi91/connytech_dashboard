import React from 'react';
import '../styles/index.css'
import Navbar from './Navbar.js';
import NavigationData from './NavigationData.js';
import ConsumptionData from './ConsumptionData.js';
import WeatherData from './WeatherData.js';
import TemperatureData from './TemperatureData.js';
import Switch from './Switch.js';
import Floorplan from './Floorplan.js';


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
