import React from 'react';

import "./styles.css";
//import logoImg from '../../assets/logo.png';

const Header = () =>{
  return(
  <div className="menu">
   <header>
      <nav>
        <ul>
          <li><a href="/header">Home</a></li>
          <li><a href="/Sobre">Sobre</a></li>
          <li><a href="/Trabalhos">Trabalhos</a></li>
          <li><a href="/Contato">Contato</a></li>     
        </ul>
      </nav>
      
   </header>
  </div>
  );
}
export default Header;