import React from 'react';
import { Nav, NavWrapper } from './styled/nav';
import { StyledLink } from './styled/links';

const Navbar = ({ links }) => {
  const navlinks = links.map(l => {
    switch (l) {
      case 'about':
        return <StyledLink to="/">About</StyledLink>;
      case 'works':
        return <StyledLink to="/works">My Works</StyledLink>;
      case 'contact':
        return <StyledLink to="/contact">Contact</StyledLink>;
      case '':
        return '';
      default:
        break;
    }
  });
  return (
    <Nav>
      <NavWrapper className="wrapper">
        <span>{navlinks[0]}</span>
        <span>{navlinks[1]}</span>
      </NavWrapper>
    </Nav>
  );
};

export default Navbar;
