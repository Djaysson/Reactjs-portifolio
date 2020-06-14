import React from 'react';
import { Link} from "react-router-dom";
import "./styles.css";
//import logoImg from '../../assets/logo.png';

const Header = () =>{
  return(
  <div className="menu">
   <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Sobre">Sobre</Link></li>
          <li><Link to="/Trabalhos">Trabalhos</Link></li>
          <li><Link to="/Contato">Contato</Link></li>     
        </ul>
      </nav>
      
   </header>
  </div>
  );
}
export default Header;