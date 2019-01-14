import React, { Component } from 'react';
import '../App.css';
import {NavLink, Route, withRouter} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

class Navbar extends Component {
    render() {
      return(
        <Menu>
          <NavLink exact to="/" className="menu-item">Animals</NavLink>
          <NavLink exact to="/fruitsveg"className="menu-item">Fruits & Veg</NavLink>
        </Menu>
      );
    }
}

export default Navbar;
