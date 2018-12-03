import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const Icon = styled.div`
  background: url(${({ url }) => withPrefix(`icons/${url}.png`)});
  background-image: ${({ url }) => `url${withPrefix(`icons/${url}.png`)}`};
  height: 40px;
  width: 40px;
  align-self: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem 0;
  opacity: 0.6;
  transition: 0.25s ease-in-out;
  :hover {
    opacity: 0.8;
  }
  @media screen and (max-width: 810px) {
    margin: 1rem;
  }
  @media screen and (max-width: 480px) {
    height: 30px;
  width: 30px;
  }
`;
