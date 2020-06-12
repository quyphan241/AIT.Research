import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Edit from './components/edit/Edit'
import Index from './components/Index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <Route path="/" exact component={Index} />
            <Route path="/edit" component={Edit} />
          </div>
        </Router>
      </div>
    );
  }
}


export default App;
