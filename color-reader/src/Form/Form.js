import React from 'react';
import './Form.css';
import Button from '../Button/Button.js';

const Form = (props) => {
    return (
      <form onSubmit={props.onSubmit}>
        <label>
          <input className={props.inputError ? 'error' : ''} type="text" placeholder="Type color..." value={props.value} onChange={props.onChange} />
        </label>
        <Button 
          text='Convert'
          type='submit'
        />
      </form>
    );
}

export default Form;