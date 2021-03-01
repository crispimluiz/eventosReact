import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from '../src/store';
import { Provider } from 'react-redux';
//provider vai interagir todas as páginas com Redux
/*Páginas */
import Login from './view/login'
import NovoUsuario from './view/usuario-novo'
import Home from './view/home/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/usuarionovo' component={NovoUsuario} />
        <Route exact path='/home' component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
