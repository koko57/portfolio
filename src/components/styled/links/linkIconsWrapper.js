import styled from 'styled-components';

export const LinkIconsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0.5rem;
  justify-content: space-around;
  @media screen and (max-width: 480px) {
    bottom: 1rem;
    left: 2rem;
  }
`;
