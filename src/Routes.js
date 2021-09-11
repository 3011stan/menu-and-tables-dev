import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Albuns from './pages/Albuns';
import Todos from './pages/Todos';
function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/posts" component={ Posts }/>
      <Route exact path="/albuns" component={ Albuns }/>
      <Route exact path="/todos" component={ Todos }/>
    </Switch>
  )
}

export default Routes;
