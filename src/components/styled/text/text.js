import styled from 'styled-components';

export const Text = styled.div`
  text-align: ${({ align }) => (align ? align : 'left')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: 100%;
  padding: ${({ pad }) => (pad ? pad : 0)};
  font-size: 1rem;
  @media screen and (max-width: 480px) {
      padding: 2rem 2rem 0;
  }
`;
