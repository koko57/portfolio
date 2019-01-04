import { Link } from 'gatsby';
import styled from 'styled-components';
import { StyledUnderline } from '../utils/variables';

export const StyledLink = styled(Link)`
  ${StyledUnderline}
  margin: 0 1rem;
  :active,
  &.current {
    opacity: 0.5;
    transition: ease-out 0.25s;
    ::after {
      width: 15%;
    }
  }
  @media (hover: hover) {
    :hover::after {
      width: 80%;
    }
  }
`;
