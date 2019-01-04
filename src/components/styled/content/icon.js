import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const Icon = styled.div`
  height: 2.5rem;
  width: 2.5rem;
  background-image: url(${({ url }) => withPrefix(`icons/${url}.png`)});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem;
  opacity: 0.6;
  transition: 0.25s ease-in-out;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 480px) {
    height: 2rem;
    width: 2rem;
    margin: 0.5rem;
  }
`;
