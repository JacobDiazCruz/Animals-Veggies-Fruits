import React, { Component } from 'react';
import '../App.css';
import Animals from './Animals';
import FruitsVeg from './FruitsVeg';
import List from './List';
import Navbar from './Navbar';
import { HashRouter, NavLink, Route, Switch } from 'react-router-dom';

class Template extends Component {
  render() {
    return (
      <HashRouter>
        <React.Fragment>
          <Navbar/>
          <Switch>
            <Route exact path="/animals" component={Animals}/>
            <Route exact path="/fruitsveg" component={FruitsVeg}/>
          </Switch>
        </React.Fragment>
      </HashRouter>
    );
  }
}

export default Template;
