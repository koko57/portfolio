import styled from 'styled-components';

export const Title = styled.h1`
  font-size: ${({ size }) => size};
  text-transform: uppercase;
  font-weight: normal;
  padding-left: ${({ pad }) => (pad ? pad : 0)};
  cursor: default;
  width: 100%;
  text-align: left;
  background: linear-gradient(
    0,
    rgba(248, 248, 248, 1) 80%,
    rgba(248, 248, 248, 0.1)
  );
`;

export const Text = styled.div`
  text-align: ${({ align }) => (align ? align : 'left')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: 100%;
  padding: ${({ pad }) => (pad ? pad : 0)};
  font-size: 0.9rem;
`;
