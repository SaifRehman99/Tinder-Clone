import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

import Header from './Header';

function App() {
  return (
    <div className='App'>
      <Router>
      <Switch>
      <Route path='/chat'>
      <Header backButton='/' />

      </Route>
      <Route path = '/'>
      <Header />
      <TinderCards />
      <SwipeButtons />
      </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
