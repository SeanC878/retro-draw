import React from 'react';

import { buildCellList } from '../utils';


const ActionPanel = (props) => {
  const activeColor= props.activeColor;
  const cellList= props.cellList;
  const setCellList= props.setCellList;

  return <div className="action-panel">
  
    <button onClick={ function (){
      const blankCellList = buildCellList()
      setCellList(blankCellList);
    }}>clear all</button>
  
    <button onClick={ function (){
      const filledCellList = buildCellList();
      for (let i=0; i<filledCellList.length; i++){
        filledCellList[i].color = activeColor
      }
      setCellList(filledCellList)
    }}>fill all</button>

    <button onClick={ function (){
      const filledEmptyList = buildCellList();
      for(let i=0; i < cellList.length; i++){
        if (cellList[i].color === null){
          filledEmptyList[i].color = activeColor
        } else {
          filledEmptyList[i].color = cellList[i].color
        }
      }
      setCellList(filledEmptyList)
    }}>fill empty</button>
  
    

  </div>
}

export default ActionPanel;