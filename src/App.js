import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'

// Import React Router components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  state = {
    userName: 'Matt'
  }

  render() {
    // Wrap entire app in a Router
    return (
      <Router>
        <div className="App">

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
              path='/information'
              component={About}
            />
            <Route
              path='/contact'
              render={(props) => <Contact match={props.match}
                                          username={this.state.userName}/>}
            />
            <Route
              component={NotFound}
            />
          </Switch>

        </div>
      </Router>

    )
  }
}

export default App;
