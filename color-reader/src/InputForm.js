import React from 'react';

const InputForm = (props) => {
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

export default InputForm;