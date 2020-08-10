import React from 'react';

import './styles.css';
import Img from '../../../assets/home.png';
import Img2 from '../../../assets/convert.png';
import Img3 from '../../../assets/palpitebox.png';

function Works() {
  return (
    <div className="containe">

      <h1>Trabalhos</h1>

      <main className="project-list">
        <article className="animation1">
          <header>
            <span>Frontend</span>
            <p>Portfolio</p>
          </header>
          <img src={Img} alt="Imagem do projeto portifolio" />
          <footer>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio/blob/master/static/home.png">demo</a></button>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio">github</a></button>
          </footer>
        </article>
        <article className="animation2">
          <header>
            <span>Fullstack</span>
            <p>ConvertMyMoney</p>
          </header>
          <img src={Img2} alt="Imagem do projeto portifolio" />
          <footer>
            <button><a href="https://convert-my-money-theta.vercel.app/">demo</a></button>
            <button><a href="https://github.com/Djaysson/ConvertMyMoney">github</a></button>
          </footer>
        </article>
        <article className="animation3">
          <header>
            <span>Fullstack</span>
            <p>PalpiteBox</p>
          </header>
          <img src={Img3} alt="Imagem do projeto portifolio" />
          <footer>
            <button><a href="https://palpite-box-orpin.vercel.app/">demo</a></button>
            <button><a href="https://github.com/Djaysson/PalpiteBox">github</a></button>
          </footer>
        </article>

      </main>
    </div>
  );
}

export default Works;