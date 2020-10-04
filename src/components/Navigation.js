import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {

  return(
    <div className="sidebar"> 

      <div className="id">
        <div className="idContent">
          <img src="./media/Kamal.png" alt="profil-pic"/>
          <h3>Kamal EL KADI</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive">
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/formations" activeClassName="navActive">
              <i className="fas fa-book"></i>
              <span>Formations</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competences" activeClassName="navActive">
              <i className="fas fa-mountain"></i>
              <span>Compétences</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive">
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <div className="signature">
          <p>K. EL KADI - 2020</p>
        </div>
      </div>
    </div>
  )
}

export default Navigation;