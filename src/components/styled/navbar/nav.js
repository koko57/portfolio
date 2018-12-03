import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  padding-bottom: 5rem;
  background: rgba(248, 248, 248, 0.75);
  @media screen and (max-width: 810px) {
    top: 0;
    background: ${({ scrolled, opened }) =>
      scrolled || opened ? 'rgba(248, 248, 248, 0.75)' : 'none'};
    height: ${({ opened }) => (opened ? 'auto' : '15vh')};
    padding-top: 5.5rem;
    padding-bottom: 2rem;
  }
  @media screen and (max-width: 480px) {
    padding-top: 1rem;
    height: ${({ opened }) => (opened ? 'auto' : '10vh')};
  }
  @media screen and (max-height: 480px) {
    padding-top: 2rem;
    height: ${({ opened }) => (opened ? 'auto' : '10vh')};
  }
`;
