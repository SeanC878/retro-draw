import React from 'react';
import Cell from './Cell';

const Grid = (props) => {
  const activeColor = props.activeColor;
  const cellList = props.cellList;
  const setCellList = props.setCellList;

  return <div className="grid">{
    cellList.map(function (cell, i) {
      return <Cell 
        key={ 'grid-'+ { i } }
        color={ cell.color } 
        handleClick={function () {
          const cellListCopy = [...cellList];
            if (cellListCopy[i].color===activeColor){
              cellListCopy[i].color = null
            } else {
              cellListCopy[i].color = activeColor
            }
          setCellList(cellListCopy);
        }}/>})
  }</div>
}

export default Grid;