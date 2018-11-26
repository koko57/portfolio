import { Link } from 'gatsby';
import styled from 'styled-components';
import { StyledUnderline } from './variables';

export const StyledLink = styled(Link)`
  ${StyledUnderline}
  margin: 0 1rem;
`;

export const StyledA = styled.a`
  ${StyledUnderline}
`;

export const ContactLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  max-width: 640px;
  margin: auto;
  position: relative;
  top: -1rem;
`;

export const LinkIcon = styled.a`
  display: inline-block;
  margin: 0.5rem;
  align-items: center;
  height: 1rem;
  :hover {
    span {
      opacity: 1;
    }
  }
  span {
    @import url('https://fonts.googleapis.com/css?family=Oxygen');
    font-size: 0.8rem;
    opacity: 0;
    transition: ease-in 0.25s;
    margin: 0 0.5rem;
    vertical-align: top;
    font-family: 'Oxygen', sans-serif;
  }
`;

export const LinkIcons = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.5rem;
  justify-content: space-around;
`;
