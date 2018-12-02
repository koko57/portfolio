import styled from 'styled-components';
import { StyledUnderline } from '../utils/variables';

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 480px) {
    margin: 1rem auto 2rem;
  }
  span.logo {
    ${StyledUnderline}
    margin-bottom: 0.75rem;
  }
  :hover span.logo::after {
    width: 80%;
  }
  span.name {
      font-family: 'Playfair Display', serif;
  }
`;