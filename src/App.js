import React, { Component } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import AppBar from '@material-ui/core/AppBar';

class App extends Component {
  render() {
    return (
      <>
        <AppBar className="header">
          <h1>WELCOME TO MY WEATHER PROJECT</h1>
        </AppBar>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:city" component={Details} />
        </Switch>
      </>
    );
  }
}

export default App;
