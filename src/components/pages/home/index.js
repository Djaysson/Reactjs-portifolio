import React from 'react';
import { Link } from "react-router-dom";

import './styles.css';
import Img from '../../../assets/coding.jpg';
const Home = () => {
  return (
    <div className="home">
      <img src={Img} alt="backgraud" />
      <div className="info">
        <h1>Ola,Eu sou</h1>
        <h2>Djayson Rodrigues</h2>
        <p>Developer Front End | React | React Nativo</p>
      </div>
      <div className="content">
        <strong>Seja bem vindo ao meu portfólio</strong>

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