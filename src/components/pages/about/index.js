import React from 'react';
import Img from '../../../assets/img2.png';
import Habilidades from '../skills/index';
import './styles.css';


function Sobre() {
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
            Me chamo Djayson Rodrigues sou desenvolvedor Frontend de aplicações web e mobile, minha formação é em Análise e Desenvolvimento
            de sistemas e sou uma pessoa apaixonado pelo desenvolvimento de software, sou fascinado por novos desafios na área ti em especial a stack
            JavaScript, React, React Native e Node.js, sou do tipo de pessoa que adora uma boa experiência e interfaces agradáveis ao usuário.
            </p>
          <p>
            Desenvolvedor que visa promover e entregar produtos da melhor qualidade.
            Alguém que acredita que perseverança, esforço e determinação levam aos melhores resultados. Estou sempre focado em provar as
            melhores práticas, fundamentos e consistência através do código.
          </p>
        </div>
      </div>
      <Habilidades />

    </>
  );
}
export default Sobre;