import React from 'react';

 import './styles.css';
import Img from '../../../assets/coding.jpg';
function Works() {
  return (
    <div className="containe">
      <h1>trabalhos</h1>
      <section>
        <article>
          <header>Site/portifolio</header>
          <img src={Img} alt="portfolio"/>
          <p>site feito em react no entuito de desmostra as minhas  
             habilidades para criar  inteface de usuario usando   
             essa tecnologia.
             </p>
          <strong>(React,Css,Javascript)</strong>
          <footer>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio">github</a></button>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio/blob/master/static/home.png">demo</a></button>
          </footer>
        </article>
      </section>
    </div>
  );
}

export default Works;