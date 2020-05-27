//React
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Components
import Activity from './components/activity/Activity';
import Feed from './components/feed/Feed';
import About from './components/About';
import Resources from './components/Resources';

//Common Components
import Navigation from "./partials/Navigation";

//Design
import './App.css';
import logo from './logo.svg';


function App() {
  return (
    <Router>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
          <Route exact path='/' component={Activity} />
          <Route exact path='/activity' component={Activity} />
          <Route exact path='/feed' component={Feed} />
          <Route exact path='/about' component={About} />
          <Route exact path='/resources' component={Resources} />
        </Switch>
        <Navigation />
    </div>
    </ Router>

  );
}

export default App;
