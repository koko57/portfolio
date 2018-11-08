import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Nav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 15vh;
  .wrapper {
    margin: auto;
    width: 80%;
    max-width: 1000px;
    display: flex;
    justify-content: space-between;
  }
`;

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
