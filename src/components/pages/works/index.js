import React from 'react';

 import './styles.css';
import Img from '../../../assets/home.png';
import Img2 from '../../../assets/bethehero.png';
import Img3 from '../../../assets/devradar.jpg';

function Works() {
  return (
    <div className="containe">
        
         <h1>Trabalhos</h1>
       
        <main className="project-list">
          <article>
            <header>
           <span>Frontend</span>
           <p>Portfolio</p> 
            </header>
            <img src={Img} alt="Imagem do projeto portifolio"/>
            <footer>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio/blob/master/static/home.png">demo</a></button>
              <button><a href="https://github.com/Djaysson/Reactjs-portifolio">github</a></button>
            </footer>
          </article>
          <article>
            <header>
           <span>Fullstack</span>
           <p>Be the hero</p> 
            </header>
            <img src={Img2} alt="Imagem do projeto portifolio"/>
            <footer>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio/blob/master/static/home.png">demo</a></button>
              <button><a href="https://github.com/Djaysson/Project-BeTheHero">github</a></button>
            </footer>
          </article>
          <article>
            <header>
              <span>Fullstack</span>
              <p>devradar</p> 
            </header>
            <img src={Img3} alt="Imagem do projeto portifolio"/>
            <footer>
            <button><a href="https://github.com/Djaysson/Reactjs-portifolio/blob/master/static/home.png">demo</a></button>
              <button><a href="https://github.com/Djaysson/Devradar">github</a></button>
            </footer>
          </article>
         
        </main>
    </div>
  );
}

export default Works;