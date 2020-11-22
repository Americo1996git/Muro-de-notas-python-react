import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MessageList from './components/MessageLIst';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <Router>
        <div className="container p-4">
          <Switch>
            <Route exact path="/" component={MessageList} />
          </Switch>
        </div>
      </Router>

  );
}

export default App;
