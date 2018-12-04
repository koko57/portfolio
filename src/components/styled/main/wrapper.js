import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 5rem 4rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 480px) {
    padding: 1rem 0;
  }
  @media screen and (max-height: 480px) {
    padding: 1.5rem 0;
  }
`;