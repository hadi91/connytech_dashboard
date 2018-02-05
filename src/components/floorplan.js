import React from 'react';
import level1 from '../images/level1a.jpg';
import level2 from '../images/level2a.jpeg';
import LevelButton from './LevelButton.js';

function Floorplan(){
    return (
      <div className="floorplan">
        <div className="floorplan2">
          <LevelButton level="Level 2"/>
          <img src={level2} alt="level2 floorplan" className="floorplan-img"/>
        </div>
        <div className="floorplan1">
          <LevelButton level="Level 1"/>
          <img src={level1} alt="level1 floorplan" className="floorplan-img"/>
        </div>
      </div>
    );
}



export default Floorplan;
