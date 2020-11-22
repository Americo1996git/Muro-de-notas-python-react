import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import MessageList from './components/MessageLIst';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={MessageList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
