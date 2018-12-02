import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ size }) => size};
  text-transform: uppercase;
  font-weight: normal;
  padding-left: ${({ pad }) => (pad ? pad : 0)};
  cursor: default;
  width: 100%;
  text-align: left;
  @media screen and (max-width: 480px) {
    text-align: ${({ main }) => (main ? 'left' : 'center')};
    padding-top: 2rem;
  }
`;