import styled from 'styled-components';

export const NavWrapper = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
  font-size: 1.3rem;
  @media screen and (max-width: 810px) {
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-around;
  }
`;
