import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
      <button type={props.type} onClick={props.onClick}>
        <a>{ props.text }</a>
      </button>
    );
}

export default Button;