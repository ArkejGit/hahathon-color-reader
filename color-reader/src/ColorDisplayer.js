import React from 'react';

const ColorDisplayer = (props) => {
    return (
      <div className="box">
      	<div className="title">
      		TITLE
      	</div>
      	<div className="content">
        	{ props.color }
        </div>
      </div>
    );
}

export default ColorDisplayer;