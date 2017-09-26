import React from 'react';
import './Form.css';
import Button from '../Button/Button.js';

const Form = (props) => {
    return (
      <form onSubmit={props.onSubmit}>
        <label>
          <input type="text" placeholder="Type color..." value={props.value} onChange={props.onChange} />
        </label>
        <Button 
          text='test'
          type='submit'
        />
      </form>
    );
}

export default Form;