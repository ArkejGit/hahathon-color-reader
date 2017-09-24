import React from 'react';

const InputForm = (props) => {
    return (
      <form onSubmit={props.onSubmit}>
        <label>
          Color:
          <input type="text" value={props.value} onChange={props.onChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
}

export default InputForm;