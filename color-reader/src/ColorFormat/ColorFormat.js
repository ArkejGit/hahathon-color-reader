import React from 'react';
import DisplayBox from '../DisplayBox/DisplayBox.js';
import Button from '../Button/Button.js';
import './ColorFormat.css';

const copyToClipboard = (text) => {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", text);
}

const ColorFormat = (props) => {
  return (
    <div className="colorFormat">
      <DisplayBox 
        title={props.type}
        content={props.color}
      /> 
      { props.color.length > 0 && 
      <Button 
      onClick={() => copyToClipboard(props.color)}
      text='Copy to clipboard'
      />
      }    
    </div>
  );
}

export default ColorFormat;