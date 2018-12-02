import styled from 'styled-components';
import { withPrefix } from 'gatsby';

export const Icon = styled.div`
  background: url(${({ url }) => withPrefix(`icons/${url}.png`)});
  background-image: ${({ url }) => `url${withPrefix(`icons/${url}.png`)}`};
  height: 50px;
  width: 50px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem 1.5rem;
  opacity: 0.8;
`;
