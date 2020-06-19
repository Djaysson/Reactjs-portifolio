import React from 'react';
import Home from './components/pages/home/index';
import About from './components/pages/about/index';
import works from './components/pages/works/index';

import {Switch,Route,} from "react-router-dom";
function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about"  component={About}/>
      <Route path="/works"  component={works}/>
    </Switch>
  );
}

export default Routes;