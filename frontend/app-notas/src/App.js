import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import NotasLIsta from './components/NotasLIsta';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import CrearNota from './components/CrearNota';
import Usuarios from './components/CrearUsuario';

function App() {
  return (
      <Router>
        <Navigation/>
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={NotasLIsta} />
            <Route exact path="/crear" component={CrearNota} />
            <Route exact path="/usuarios" component={Usuarios} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
