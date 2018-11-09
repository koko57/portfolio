import React from 'react';
import { Link } from 'gatsby';
import {Nav} from './styled/nav'
import {StyledLink} from './styled/styled'

const Navbar = ({ links }) => {
  const navlinks = links.map(l => {
    switch (l) {
      case 'about':
        return <Link to="/">About</Link>;
      case 'works':
        return <Link to="/works">My Works</Link>;
      case 'contact':
        return <Link to="/contact">Contact</Link>;
      case '':
        return '';
      default:
        break;
    }
  });
  return (
    <Nav>
      <div className="wrapper">
        <span>{navlinks[0]}</span>
        <span>{navlinks[1]}</span>
      </div>
    </Nav>
  );
};

export default Navbar;
