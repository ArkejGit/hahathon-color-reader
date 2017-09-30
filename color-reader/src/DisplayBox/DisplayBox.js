import React from 'react';
import './DisplayBox.css';

const DisplayBox = (props) => {
    return (
      <div className="displaybox">
      	<div className="displaybox-title">
      		{ props.title }
      	</div>
      	<div className="displaybox-content">
        	{ props.content }
        </div>
      </div>
    );
}

export default DisplayBox;