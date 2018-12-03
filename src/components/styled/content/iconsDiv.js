import styled from 'styled-components';

export const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 4rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 810px) {
    padding: 2rem;
    justify-content: center;
  }
  @media screen and (max-width: 480px) {
    padding: 0 1rem;
  }
`;
