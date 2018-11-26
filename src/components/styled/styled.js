import styled, { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Oxygen');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #f8f8f8;
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
    color: #303030;
    &:visited, &:active {
      color: #303030;
    }
  }
`;

export const Page = styled.div`
  height: 100vh;
  width: 100%;
  color: #303030;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 4rem 4rem 6rem;
  display: flex;
  align-content: center;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 4rem 2rem 6rem;
  }
`;
