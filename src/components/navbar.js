import React, { Component } from 'react';
import { Nav } from './styled/navbar/nav';
import { NavWrapper } from './styled/navbar/navWrapper';
import { Hamburger } from './styled/navbar/hamburger';
import { NavLinksWrapper } from './styled/navbar/navLinksWrapper';
import { NavLink } from './styled/navbar/navLink';
import { Menu, X } from 'react-feather';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
      opened: false
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', () => {
      window.pageYOffset > 50
        ? this.setState({ scrolled: true })
        : this.setState({ scrolled: false });
    });
  }
  handleClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const { opened, scrolled } = this.state;
    return (
      <Nav id="nav" scrolled={scrolled} opened={opened}>
        <NavWrapper className="wrapper">
          <Hamburger onClick={this.handleClick}>
            <X className={opened ? 'show': 'hide'}/>
            <Menu className={!opened ? 'show': 'hide'}/>
          </Hamburger>
          <NavLinksWrapper className={opened ? 'show': null}>
            <NavLink to="/" activeClassName="current" className={opened ? 'show': null}>
              About
            </NavLink>
            <NavLink to="/works" activeClassName="current" className={opened ? 'show': null}>
              My Works
            </NavLink>
            <NavLink to="/contact" activeClassName="current" className={opened ? 'show': null}>
              Contact
            </NavLink>
          </NavLinksWrapper>
        </NavWrapper>
      </Nav>
    );
  }
}

export default Navbar;
