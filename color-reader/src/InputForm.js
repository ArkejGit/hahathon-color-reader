import React from 'react';

export default class InputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Color:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}