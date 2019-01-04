import styled from 'styled-components';
import { StyledUnderline } from '../utils/variables';

export const ContactLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .logo {
    ${StyledUnderline}
    margin-bottom: 0.75rem;
  }
  .name {
      font-family: 'Playfair Display', serif;
  }
  @media screen and (max-width: 480px) {
    margin: 1rem auto 2rem;
  }
  @media (hover: hover) {
    :hover .logo::after {
      width: 80%;
    }
  }
`;