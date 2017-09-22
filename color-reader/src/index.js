import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ColorReader extends React.Component {
  render() {
    return (
      <div id="colorReader">
        <div id="inputWrapper">
        
        </div>
        <div id="outputWrapper">
          <div className="colorFormat">
          
          </div>
          <div className="colorFormat">
          
          </div>
          <div className="colorFormat">
          
          </div>
        </div>
        <div id="footer">

        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <ColorReader />,
  document.getElementById('root')
);