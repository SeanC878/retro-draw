import React from 'react';


const Cell = ({color, isActive, handleClick}) => {
  return <div className={isActive ? "cell active" : "cell"} style={{backgroundColor: color}} onClick={handleClick}>    
  </div>
}

export default Cell;