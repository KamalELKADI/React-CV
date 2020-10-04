import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class contact extends Component {

  render() {
    return (

    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              <span>Paris</span>
            </li>
            <li>
              <i className="fas fa-mobile-alt"></i>
              <CopyToClipboard text="0787040728">
                <span className="clickInput" onClick={() => { alert('Téléphone copié !'); }}>07 87 04 07 28</span>
              </CopyToClipboard>
            </li>
            <li>
              <i className="far fa-envelope"></i>
              <CopyToClipboard text="elkadikamal2@gmail.com">
                <span className="clickInput" onClick={() => { alert('E-mail copié !'); }}>elkadikamal2@gmail.com</span>
              </CopyToClipboard>
            </li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>
            <a href="https://www.linkedin.com/in/kamal-el-kadi-b32395140/" target="_blank" rel="noopener noreferrer">
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/KamalELKADI" target="_blank" rel="noopener noreferrer">
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>  
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

export default contact;