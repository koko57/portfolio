import styled from 'styled-components';

export const IconsDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 -1rem;
  @media screen and (max-width: 810px) {
    justify-content: space-evenly;
  }
  @media screen and (max-width: 480px) {
    margin: 0 -0.5rem;
  }
`;
