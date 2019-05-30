import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'  

// Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'

class App extends Component {
  state = {
    username: 'Reid' 
  }

  render() {
    return (
      <div className="App">
        <Router>
            <Route 
              path='/'
              component={Navigation}
            />
            <Switch>
            <Route 
              exact path='/'
              component={Home}
            />
            <Route 
              path='/about'
              render={
                (routerProps) => <About match={routerProps.match} username={this.state.username} />
              }
            />
            <Route 
              exact path='/contact'
              component={Contact}
            />
            <Route
              component={NotFound}
            />

          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
