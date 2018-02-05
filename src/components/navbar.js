import React from 'react';
import logo from '../images/logo.png';

class Navbar extends React.Component {
  render(){
    return (
      <div className="navbar">
        <img src={logo} alt="ConnyTech Logo" className="logo"/>
        <h1>Intelligent Facility Management System</h1>
      </div>
    )
  }

}


export default Navbar;
