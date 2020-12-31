import React from 'react';
import Home from './components/pages/home/index';
import About from './components/pages/about/index';
import works from './components/pages/works/index';
import Contact from './components/pages/contact/index.js';
import { BrowserRouter } from "react-router-dom";
import Footer from './components/footer';
import { Switch, Route, } from "react-router-dom";
import Header from './components/header/index';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/works" component={works} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;