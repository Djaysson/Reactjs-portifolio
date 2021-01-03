import React from 'react';
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import './styles.css';
import Img from '../../../assets/coding.jpg';

const Home = () => {
  return (

    <div className="home">

      <img src={Img} alt="backgraud" />
      <div className="info">
        <h1>Ola,Eu sou</h1>
        <h2>Djayson Rodrigues</h2>
        <p>Front-end developer | Javascript | Reactjs</p>
        <div className="icons">
          <a href="https://github.com/Djaysson" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </a>

          <a href="https://www.linkedin.com/in/djaysonrodrigues/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={25} />
          </a>
        </div>
      </div>
      <div className="content">
        <h2>Seja bem vindo ao meu portfólio</h2>

        <p>Me chamo Djayson Rodrigues e criei este
        Portfólio com o intuito de  mostrar os
        meus projetos que fiz como desenvolvedor.
        Aqui você irá conhecer
        um pouco da minha história profissional,
        além de poder conferir meus trabalhos e
        entrar em contato diretamente comigo.
            </p>
        <button><Link to="/about">Saiba mais</Link></button>


      </div>

    </div>

  );
}
export default Home; 