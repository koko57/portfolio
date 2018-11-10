import styled, { createGlobalStyle } from 'styled-components';
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
