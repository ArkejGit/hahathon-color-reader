import React from 'react';
import ReactDOM from 'react-dom';
import InputForm from './InputForm.js';
import './index.css';

class ColorReader extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
  }

  handleChange = e => {
    this.setState({value: e.target.value});
  }

  handleSubmit = e => {
    e.preventDefault();
    if(this.handleValidation()){
           console.log(`Color: ${this.state.value}`);
        }else{
           console.log("Invalid color format")
        }
  }

  handleValidation() {
    // regex from https://venturedevs.com/color-picker/index.html
    let REGEX = {
                HEX: /^#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/,
                SHORT_HEX: /^#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])$/,
                RGB: /^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/,
                HSL: /^hsl\((\d{1,3}),(\d{1,3})%,(\d{1,3})%\)$/
            };
    let value = this.state.value;

    return value.match(REGEX.HEX) ||
           value.match(REGEX.SHORT_HEX) ||
           value.match(REGEX.RGB) ||
           value.match(REGEX.HSL);
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
        </div>
        <div id="outputWrapper">
          <div className="colorFormat">
          
          </div>
          <div className="colorFormat">
          
          </div>
          <div className="colorFormat">
          
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