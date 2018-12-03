import styled from 'styled-components';

export const Hamburger = styled.div`
  display: none;
  @media screen and (max-width: 810px) {
    display: block;
    position: relative;
  }
  & > .show {
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    transition: ease-in-out 0.4s;
  }
  & > .hide {
    opacity: 0;
  }
`;
