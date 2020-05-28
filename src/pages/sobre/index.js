import React from 'react';

import './styles.css';
import Img from '../../assets/img.jpg';

const Sobre = () => {
  return(
    <div className="sobre">
      <img src={Img} alt="perfil"/>
      <div className="conteudo">
        <h2><strong>Sobre</strong>Mim</h2>
        
        <p>Sou desenvolvedor Frontend de aplicações web e mobile,
          tenho 27 anos, graduando em Análise e Desenvolvimento de
          sistemas, apaixonado por novas tecnologias, especialmente 
          JavaScript, React, React Native. Minha história na tecnologia
          começa no início de 2018 quando eu decidir fazer realmente uma 
          faculdade na área de ti. No começo não sabia muito sobre código, 
          mais com o passar do tempo eu comecei a ver alguns linguagem de 
          programação como C, java, javacript etc... Isso mim despertou a 
          curiosidade de saber mais e mais sobre diferentes tecnologia e logo
          após isso entrei de cabeça nesse mundo de infinitas possibilidades,
          na ocasião cabei gostado da stack javascript ,pois com a mesma é possível
          fazer diferentes projeto que vai de frontend, backend, mobile, com isso eu 
          acabei ficando maravilhado com essa stack até chega nesse exato momento onde 
          sou desenvolvedor.</p>
        </div>
    </div>
  );
}
export default Sobre;