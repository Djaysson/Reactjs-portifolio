import React from 'react';
import Habilidades from '../skills/index';
import './styles.css';
import Img from '../../../assets/img.jpg';

const Sobre = () => {
  return (
    <>
      <div className="sobre">
        <img src={Img} alt="perfil" />
        <div className="conteudo">
          <div className="title">
            <strong>Sobre</strong>
            <h2>Mim</h2>
          </div>
          <p>
            Me chamo Djayson Rodrigues sou desenvolvedor Frontend de aplicações
            web e mobile, sou cientista da computação, tenho 27 anos, graduando
            em Análise e Desenvolvimento de sistemas, apaixonado pelo desenvolvimento
            de software, em especial a stack JavaScript, React, React Native e Node.js
            e todo o ecossistema por volta dessas tecnologias.
          </p>
          <p>
            Sou lifelong learner de tecnologia e apaixonado pelo que eu faço, sou
            fascinado por novos desafios na área de desenvolvimento de software,
            principalmente na stack JavaScript, pois com ela é possível fazer diferentes
            projeto que vai de frontend, backend, mobile.
          </p>
        </div>
      </div >
      <Habilidades />
    </>
  );
}
export default Sobre;