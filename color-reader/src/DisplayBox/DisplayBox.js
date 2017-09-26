import React from 'react';
import './DisplayBox.css';

const DisplayBox = (props) => {
    return (
      <div className="box">
      	<div className="title">
      		{ props.title }
      	</div>
      	<div className="content">
        	{ props.content }
        </div>
      </div>
    );
}

export default DisplayBox;