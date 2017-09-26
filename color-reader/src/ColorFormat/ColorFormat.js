import React from 'react';
import DisplayBox from '../DisplayBox/DisplayBox.js';
import Button from '../Button/Button.js';



const ColorFormat = (props) => {
  return (
    <div className="colorFormat">
      <DisplayBox 
        title='HEX'
        content={props.color}
      /> 
      { props.color.length > 0 && 
      <Button 
      
      text='test'
      />
      }    
    </div>
  );
}

export default ColorFormat;