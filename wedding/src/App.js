import React, { Component } from 'react'; 
import { Router, Route, browserHistory } from 'react-router';
import About from './pages/About';
import Event from './pages/Event';
import Registry from './pages/Registry';
import RSVP from './pages/RSVP';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={About} />
          <Route path='/event' component={Event} />
          <Route path='/registry' component={Registry} />
          <Route path='/rsvp' component={RSVP} />
        </Router>
    );
  }
}

export default App;
