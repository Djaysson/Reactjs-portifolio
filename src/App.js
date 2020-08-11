import React from 'react';
import Header from './components/header/index';
import "./global.css";
import Routes from './Routes';
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
