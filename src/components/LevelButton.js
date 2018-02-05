import React from 'react';

function LevelButton(props){
    return(
      <div className="levelButton">
        <button>{props.level}</button>
      </div>
    );
}

export default LevelButton;
