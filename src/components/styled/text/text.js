import styled from 'styled-components';

export const Text = styled.div`
  text-align: ${({ align }) => (align ? align : 'left')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  width: 100%;
  font-size: 1rem;
  line-height: 1.8rem;
  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
    line-height: 1.5rem;
  }
`;
