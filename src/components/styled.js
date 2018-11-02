import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
  p {
    @import url('https://fonts.googleapis.com/css?family=Roboto');
    font-family: 'Roboto';
    margin: 1rem auto;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #0b0b0b;
  color: #f2f2f2;
  padding: 4rem;
`;

export const Title = styled.h1`
  font-size: ${props => (props.large ? '5rem' : '2rem')};
  text-transform: uppercase;
  font-weight: normal;
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300');
  font-family: 'Open Sans';
  margin-bottom: 2rem;
`;
