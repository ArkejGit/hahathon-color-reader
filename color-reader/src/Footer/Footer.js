import React from 'react';
import './Footer.css';
import SO_logo from './img/so-icon.png';
import GH_logo from './img/GitHub-Mark-32px.png';

const Footer = (props) => {
    return (
      <div id="footer">
        <div id="footer-header">
          Hahathon
        </div>
        <div id="footer-content">
          <div>
            created by ARKEJ
          </div>
          <a href='https://github.com/ArkejGit'><img src={GH_logo} alt='GitHub'></img></a>
          <a href='https://stackoverflow.com/users/5904606/arkej?tab=profile'><img src={SO_logo} alt='Stack Overflow'></img></a>
        </div>      
      </div>
    );
}

export default Footer;