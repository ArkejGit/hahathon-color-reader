import React from 'react';
import Form from '../Form/Form.js';
import ColorFormat from '../ColorFormat/ColorFormat.js';
import Footer from '../Footer/Footer.js';
import './ColorReader.css';
var convert = require('color-convert');

export default class ColorReader extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      inputError: false,
      typedColor: '',
      colors: {
        hex: '',
        rgb: '',
        hsl: ''
      }
    };
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }
  
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value === '') return;

    const typedColor = this.state.value; 

    if (this.handleValidation(typedColor)) {      

      const colors = this.convertColors(typedColor);

      this.setState({ 
        typedColor: typedColor,
        value: '',
        colors: colors         
      });

      document.body.style.backgroundColor = typedColor;
      
    } else {
      this.showError();
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
      if (!color.match(/[#%]/)) { i = 1 }
      else i = color.match(/#/) ? 0 : 2;
      return formats[i];
    }

    const typedColorFormat = checkFormat(typedColor);

    const channels = typedColorFormat === 'hex' ? typedColor.substr(1) : typedColor.match(/\d+/g);

    for (let color in colors) {
      if (colors[color] === typedColorFormat) {
        colors[color] = Array.isArray(channels) ? channels.join(',') : channels; 
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

  showError() {
    const prev = this.state.value;

    this.setState({
      value: 'Invalid color format',
      inputError: true
    });

    setTimeout(() => {
      this.setState({
        value: prev,
        inputError: false
      })
    }, 500);
  }



  render() {
    return (
      <div id="colorReader">
        <div id="inputWrapper">
          <Form 
            value={this.state.value}
            inputError={this.state.inputError}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div id="outputWrapper">
          <ColorFormat 
          color={this.state.colors.hex}
          type='HEX'
          />
          <ColorFormat 
          color={this.state.colors.rgb}
          type='RGB'
          />
          <ColorFormat 
          color={this.state.colors.hsl}
          type='HSL'
          />          
        </div>
        <Footer />
      </div>
    );
  }
}