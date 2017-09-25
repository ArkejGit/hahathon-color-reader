import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './InputForm.js';
import ColorDisplayer from './ColorDisplayer.js';
import './index.css';
var convert = require('color-convert');

class ColorReader extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      typedColor: '',
      colors: {
        hex: 'hex',
        rgb: 'rgb',
        hsl: 'hsl'
      }
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    const typedColor = this.state.value; 

    if (this.handleValidation(typedColor)) {      

      const colors = this.convertColors(typedColor);

      this.setState({ 
        typedColor: typedColor,
        value: '',
        colors: colors         
      });
      
    } else {
      console.log("Invalid color format")
    }
  }

  handleValidation(color) {
    // regex from https://venturedevs.com/color-picker/index.html
    const REGEX = {
                HEX: /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                SHORT_HEX: /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                RGB: /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/,
                HSL: /^hsl\((\d{1,3}),(\d{1,3})%,(\d{1,3})%\)$/
            };
    const value = color;

    return value.match(REGEX.HEX) ||
           value.match(REGEX.SHORT_HEX) ||
           value.match(REGEX.RGB) ||
           value.match(REGEX.HSL);
  }

  convertColors(typedColor) {    
    const colors = {
        hex: 'hex',
        rgb: 'rgb',
        hsl: 'hsl'
      };
    function checkFormat(color) {
      const formats = ['hex','rgb','hsl'];
      let i;
      if (!color.match(/[#%]/)) { i = 1}
      else i = color.match(/#/) ? 0 : 2;
      return formats[i];
    }
    const typedColorFormat = checkFormat(typedColor);

    const channels = typedColor.match(/\d+/g);

    for (let color in colors) {
      if (colors[color] === typedColorFormat) {
        colors[color] = channels.join(','); 
      }
      else {
        const convertedColor = convert[typedColorFormat][color](channels);
        colors[color] = Array.isArray(convertedColor) ? convertedColor.join(',') : convertedColor;
      }
    }

    colors.hex = `#${colors.hex}`; 
    colors.rgb = `rgb(${colors.rgb})`; 
    colors.hsl = `hsl(${colors.hsl})`;    

    return colors;
  }

  render() {
    return (
      <div id="colorReader">
        <div id="inputWrapper">
          <InputForm 
            value={this.state.value}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
          {this.state.typedColor}
        </div>
        <div id="outputWrapper">
          <div className="colorFormat">
            <ColorDisplayer 
              color={this.state.colors.hex}
            />            
          </div>
          <div className="colorFormat">
            <ColorDisplayer 
              color={this.state.colors.rgb}
            /> 
          </div>
          <div className="colorFormat">
            <ColorDisplayer 
              color={this.state.colors.hsl}
            /> 
          </div>
        </div>
        <div id="footer">

        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ColorReader />,
  document.getElementById('root')
);