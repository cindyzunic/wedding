import React, { Component } from 'react'; 
import { Router, Route, browserHistory } from 'react-router';
import About from './pages/About';
import Event from './pages/Event';
import Misc from './pages/Misc';
import RSVP from './pages/RSVP';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path='/' component={About} />
          <Route path='/event' component={Event} />
          <Route path='/misc' component={Misc} />
          <Route path='/rsvp' component={RSVP} />
        </Router>
    );
  }
}

export default App;
