import React from 'react';

import './styles.css';
import Img from '../../../assets/home.png';
import Img2 from '../../../assets/convert.png';
import Img3 from '../../../assets/palpitebox.png';
import Img4 from '../../../assets/pageTestesCovid.png';
import Img5 from '../../../assets/proffy.png';

function Works() {
  return (

    <div className="containe-trabalhos">

      <h1>Trabalhos</h1>

      <main className="project-list">
        <article className="projects">
          <header>
            <span>Frontend</span>
            <p>Portfolio</p>
          </header>
          <img src={Img} alt="Imagem do projeto portifolio" />
          <footer>
            <button><a target="_blank" rel="noopener noreferrer" href="https://portfolio.djaysson.vercel.app">demo</a></button>
            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/Djaysson/Reactjs-portifolio">github</a></button>
          </footer>
        </article>
        <article className="projects">
          <header>
            <span>Fullstack</span>
            <p>ConvertMyMoney</p>
          </header>
          <img src={Img2} alt="Imagem do projeto ConvertMyMoney" />
          <footer>
            <button><a target="_blank" rel="noopener noreferrer" href="https://convertmymoney.vercel.app">demo</a></button>
            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/Djaysson/ConvertMyMoney">github</a></button>
          </footer>
        </article>
        <article className="projects">
          <header>
            <span>Fullstack</span>
            <p>PalpiteBox</p>
          </header>
          <img src={Img3} alt="Imagem do projeto PalpiteBox" />
          <footer>
            <button><a target="_blank" rel="noopener noreferrer" href="https://palpite-box-orpin.vercel.app/">demo</a></button>
            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/Djaysson/PalpiteBox">github</a></button>
          </footer>
        </article>
        <article className="projects">
          <header>
            <span>Frontend</span>
            <p>Testes-covid</p>
          </header>
          <img src={Img4} alt="Imagem do projeto Testes-covid" />
          <footer>
            <button><a target="_blank" rel="noopener noreferrer" href="https://testes-covid.netlify.app">demo</a></button>
            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/Djaysson/Testes-covid">github</a></button>
          </footer>
        </article>
        <article className="projects">
          <header>
            <span>Frontend</span>
            <p>Proffy</p>
          </header>
          <img src={Img5} alt="Imagem do projeto Proffy" />
          <footer>
            <button><a target="_blank" rel="noopener noreferrer" href="https://proffyapp.vercel.app">demo</a></button>
            <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/Djaysson/Proffy">github</a></button>
          </footer>
        </article>

      </main>
    </div>


  );
}

export default Works;