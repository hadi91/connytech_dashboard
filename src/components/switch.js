import React from 'react';

class Switch extends React.Component {
  render(){
    return(
      <div className="switch">
        <button className="switch-on">ALL AC ON</button>
        <button className="switch-off">ALL AC OFF</button>
      </div>
    )
  }
}

export default Switch;
