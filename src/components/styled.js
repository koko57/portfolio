import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Oxygen');
  * {
    font-family: 'Playfair Display', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  p, a, h2, h3, h4, h5{
    font-family: 'Oxygen';
    font-weight: normal;
    margin: 1rem auto;
  }
  a {
    text-decoration: none;
    &:visited, &:active {
      color: #303030;
    }
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #f8f8f8;
  color: #303030;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 4rem 6rem;
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: ${props => props.size};
  text-transform: uppercase;
  font-weight: normal;
  margin-bottom: 2rem;
`;
