import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';
import Home from './pages/home/index';
import Sobre from './pages/sobre/index';
import "./global.css";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      
      <Footer />
    </div>
  );
}

export default App;
