import styled from 'styled-components';

export const NavLinksWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 810px) {
    display: none;
    flex-direction: column;
    align-items: flex-end;
    padding-bottom: 2rem;
    &.show {
      display: flex;
    }
  }
`;
