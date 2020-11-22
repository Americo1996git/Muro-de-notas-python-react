import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MessageList from './components/MessageLIst';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './components/Navigation';
import CrearNota from './components/CrearNota';

function App() {
  return (
      <Router>
        <Navigation/>
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={MessageList} />
            <Route exact path="/crear" component={CrearNota} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
