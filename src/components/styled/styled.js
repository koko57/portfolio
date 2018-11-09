import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'gatsby';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Oxygen');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1, h2 {
    font-family: 'Playfair Display', serif;
  }
  p {
    font-family: 'Oxygen';
    font-weight: normal;
    margin: 1rem auto;
  }
  a {
    text-decoration: none;
    &:visited, &:active {
      color: #303030;
    }
    font-family: 'Playfair Display', serif;
    position: relative;

    &:after {
    position: absolute;
    content: '';
    height: 1px;
    border-radius: 15px;
    bottom: -2px;
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 0;
    background: linear-gradient(
      111.7deg,
      rgba(80, 177, 225, 1) 20%,
      rgba(165, 41, 185, 1) 95%
    );
    transition: ease-in-out 0.5s;
    }
    &:hover:after {
    width: 80%;
  }
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  color: #303030;
`;
export const Text = styled.div`
  width: 100%;
  padding: 0 4rem;
  font-size: 0.8rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 4rem 6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 4rem 2rem 6rem;
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.size};
  text-transform: uppercase;
  font-weight: normal;
  padding-left: ${props => (props.pad ? props.pad : 0)};
  cursor: default;
  width: 100%;
  text-align: left;
  background: linear-gradient(
    0,
    rgba(248, 248, 248, 1) 80%,
    rgba(248, 248, 248, 0.1)
  );
`;