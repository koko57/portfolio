import React from 'react';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Main from '../components/main';
import { Title } from '../components/styled/text';
import Navbar from '../components/navbar';
import { ContactLinks } from '../components/styled/links';
import { StyledA } from '../components/styled/links';

const contact = () => (
  <Main>
    <Title size={'2rem'}>Contact</Title>
    <ContactLinks className="links">
      <StyledA href="https://github.com/koko57" target="_blank">
        <GitHub size={48} color={'#343434'} strokeWidth={'1px'} />
      </StyledA>
      <StyledA href="https://www.linkedin.com/in/agata-kosior/" target="_blank">
        <Linkedin size={48} color={'#343434'} strokeWidth={'1px'} />
      </StyledA>
      <StyledA href="mailto:agata.kosior57@gmail.com">
        <Mail size={48} color={'#343434'} strokeWidth={'1px'} />
      </StyledA>
    </ContactLinks>
    <Navbar links={['works', 'about']} />
  </Main>
);

export default contact;
