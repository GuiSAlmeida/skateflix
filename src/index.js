import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import RegisterVideo from './pages/register/Video';
import RegisterCategory from './pages/register/Category';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cadastro/video" component={RegisterVideo} />
      <Route path="/cadastro/categoria" component={RegisterCategory} />
      <Route component={() => (<h1>Página não encontrada</h1>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
