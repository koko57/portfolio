import styled from 'styled-components';

export const LinkIcon = styled.a`
  display: inline-block;
  padding: 0.5rem;
  margin-bottom: 1rem;
  align-items: center;
  height: 1rem;
  :hover {
    span {
      opacity: 1;
    }
  }
  span {
    font-family: 'Oxygen', sans-serif;
    font-size: 0.9rem;
    opacity: 0;
    transition: ease-in 0.25s;
    margin: 0 0.5rem;
    vertical-align: 0.2rem;
    @media screen and (max-width: 360px) {
      opacity: 1;
    }
  }
`;

