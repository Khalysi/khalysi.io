import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerMenu from 'react-hamburger-menu';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleClick = () => {
    this.setState({open: !this.state.open});
  }

  displayMobileIcon = () => {
    return (
      <HamburgerMenu className="mobile-nav-icon"
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={3}
        rotate={0}
        color='white'
        borderRadius={3}
        animationDuration={0.5}
      />
    )
  }

  // these 2 displays should be 1, fix repeatable code if time
  displayNav = () => {
    return (
      <ul>
        <li><NavLink exact to="/">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="references">References</NavLink></li>
      </ul>
    );
  }
  displayMobileNav = () => {
    return (
      <ul id="mobile">
        <li><NavLink exact to="/">About</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/resume">Resume</NavLink></li>
        <li><NavLink to="references">References</NavLink></li>
      </ul>
    );
  }

  render() {
    return (
      <nav>
        {this.state.open ?  this.displayMobileNav() : null}
        {window.innerWidth > 768 ? this.displayNav() : this.displayMobileIcon()}
      </nav>  
    );
  }
}

export default Nav;