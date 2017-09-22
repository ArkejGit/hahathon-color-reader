import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ColorReader extends React.Component {
  render() {
    return (
      <div className="ColorReader">
        ColorReader
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ColorReader />,
  document.getElementById('root')
);