import styled from 'styled-components';

export const Card = styled.div`
  width: 280px;
  height: 170px;
  padding: 0.5rem;
  position: relative;
  margin: 0 auto 1rem;
  ::after {
    content: '';
    background-image: ${props => `url(${props.img})`};
    background-size: 290px 175px;
    background-repeat: no-repeat;
    background-position: center;
    background-color: #f3f3f399;
    /* background-blend-mode: screen; */
    transition: 0.25s ease-in;
    opacity: 0;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
  :hover::after {
    opacity: 0.7;
  }
  @media screen and (max-width: 480px) {
    width: 250px;
    height: 130px;
  }

  p {
    font-size: 0.9rem;
    :last-of-type {
      font-size: 0.7rem;
      @media screen and (max-width: 540px) {
        font-size: 0.6em;
      }
    }
    @media screen and (max-width: 540px) {
      font-size: 0.8em;
    }
  }
  h2 {
    font-size: 1.1rem;
    font-weight: normal;
    @media screen and (max-width: 540px) {
      font-size: 0.8em;
    }
  }
`;

export const ProjectList = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: space-around;
  ::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
