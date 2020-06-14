import React from 'react';
import Header from './components/header/index';
import Footer from './components/footer/index';
import "./global.css";
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
