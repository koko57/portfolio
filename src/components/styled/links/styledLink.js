import { Link } from 'gatsby';
import styled from 'styled-components';
import { StyledUnderline } from '../utils/variables';

export const StyledLink = styled(Link)`
  ${StyledUnderline}
  margin: 0 1rem;
  :hover::after {
    width: 80%;
  }
  :active,
  &.current {
    opacity: 0.5;
    transition: ease-out 0.25s;
    ::after {
      width: 15%;
    }
  }
`;
