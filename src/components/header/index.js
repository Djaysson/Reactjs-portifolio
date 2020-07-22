import React from 'react';
import { Link} from "react-router-dom";
import "./styles.css";
import logoImg from '../../assets/logo.svg';

const Header = () => {
  return(
  <div className="menu">
  <header>
  <img src={logoImg} alt="logotipo"/>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/works">Trabalhos</Link></li>
          <li><Link to="/Contact">Contato</Link></li>     
        </ul>
      </nav>      
   </header>
  </div>
  );
}
export default Header;