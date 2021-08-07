import React from 'react';
import Cell from './Cell';

import { COLORS } from '../utils';

 const Palette = (props) => {
  const{ activeColor, setActiveColor} = props
  return <div className="palette">{COLORS.map((color, index) => {
    return (
      <Cell
        key={'palette-' + index }
        color={ color }
        isActive = {activeColor === color ? true : false}
        handleClick = { function (){
        setActiveColor(color)}}/>
    )
  })}</div>

}
export default Palette