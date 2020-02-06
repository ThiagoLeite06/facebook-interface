import React from 'react';
import logo from '../../assets/img/facebook-1.png';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navbar">
        <div className="header__logo">
          <img src={logo} />
        </div>
        <div className="header__menu">
          <ul className="header__menu__list">
            <li>Meu perfil</li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;