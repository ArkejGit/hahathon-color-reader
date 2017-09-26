import React from 'react';
import './Form.css';

const Form = (props) => {
    return (
      <form onSubmit={props.onSubmit}>
        <label>
          <input type="text" placeholder="Type color..." value={props.value} onChange={props.onChange} />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    );
}

export default Form;