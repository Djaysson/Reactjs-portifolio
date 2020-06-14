import React from 'react';
import Home from './components/pages/home/index';
import Sobre from './components/pages/sobre/index';
import {Switch,Route,} from "react-router-dom";
function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/sobre"  component={Sobre}/>
    </Switch>
  );
}

export default Routes;