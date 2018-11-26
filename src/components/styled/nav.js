import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: 15vh;
  background-color: linear-gradient(
    180deg,
    rgba(221, 221, 221, 0) 10%,
    rgba(248, 248, 248, 1) 50%
  );
`;

export const NavWrapper = styled.div`
  margin: auto;
  width: 80%;
  max-width: 1000px;
  display: flex;
  justify-content: flex-end;
`;
