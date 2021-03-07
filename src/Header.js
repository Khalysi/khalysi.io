import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink exact to="/">
          <p className="title">Jessica Jenkins</p>
          <p>Front End Web Developer</p>
        </NavLink>
        <Nav />
      </header>
    );
  }
}

export default Header;