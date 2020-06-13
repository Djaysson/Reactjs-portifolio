import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './components/pages/home/index';
import Sobre from './components/pages/sobre/index';
import "./global.css";

const App = () => {
  return (
    <div>
      <Header />
     
      <Sobre />
      
      <Footer />
    </div>
  );
}

export default App;
