import React from 'react';
import { Title } from '../components/styled/styled';
import { a } from '../components/styled/styled';
import Navbar from '../components/navbar';
import Main from '../components/main';
import { GitHub, Linkedin, Mail } from 'react-feather';
import styled from 'styled-components';

const Links = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 640px;
  margin: auto;
  position: relative;
  top: -5rem;
`;

const contact = () => (
  <Main>
    <Title size={'2rem'}>Contact</Title>
    <Links className="links">
      <a href="https://github.com/koko57" target="_blank">
        <GitHub size={48} color={'#343434'} strokeWidth={'1px'} />
      </a>
      <a href="https://www.linkedin.com/in/agata-kosior/" target="_blank">
        <Linkedin size={48} color={'#343434'} strokeWidth={'1px'} />
      </a>
      <a href="mailto:agata.kosior57@gmail.com">
        <Mail size={48} color={'#343434'} strokeWidth={'1px'} />
      </a>
    </Links>
    <Navbar links={['works', 'about']} />
  </Main>
);

export default contact;
