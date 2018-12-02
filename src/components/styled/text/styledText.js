import styled from 'styled-components';
import {StyledUnderline} from '../utils/variables'

export const StyledText = styled.a`
  span {
    ${StyledUnderline}
  }
  :hover span::after {
    width: 80%;
  }
`;
