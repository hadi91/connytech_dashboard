import React from 'react';

class levelButton extends React.Component {
  render(){
    return(
      <div className="levelButton">
        <button>{this.props.level}</button>
      </div>
    )
  }
}

export default levelButton;
