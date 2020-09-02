import styled from 'styled-components';
import { StyledUnderline } from '../../utils/variables';

export const StyledText = styled.a`
  span {
    ${StyledUnderline}
  }
  @media (hover: hover) {
    :hover span::after {
      width: 80%;
    }
  }
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;
