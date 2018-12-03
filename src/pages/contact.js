import React from 'react';
import { GitHub, Linkedin, Mail } from 'react-feather';
import Main from '../components/main';
import { Title } from '../components/styled/text/title';
import Navbar from '../components/navbar';
import { ContactLinksWrapper } from '../components/styled/links/contactLinksWrapper';
import { ContactLink } from '../components/styled/links/contactLink';

const contact = () => (
  <Main>
    <Title>Contact</Title>
    <ContactLinksWrapper className="links">
      <ContactLink href="https://github.com/koko57" target="_blank">
        <span className="logo">
          <GitHub size={48} color={'#343434'} strokeWidth={'1px'} />
        </span>
        <span className="name">GitHub</span>
      </ContactLink>
      <ContactLink
        href="https://www.linkedin.com/in/agata-kosior/"
        target="_blank"
      >
        <span className="logo">
          <Linkedin size={48} color={'#343434'} strokeWidth={'1px'} />
        </span>
        <span className="name">LinkedIn</span>
      </ContactLink>
      <ContactLink href="mailto:agata.kosior57@gmail.com">
        <span className="logo">
          <Mail size={48} color={'#343434'} strokeWidth={'1px'} />
        </span>
        <span className="name">Mail</span>
      </ContactLink>
    </ContactLinksWrapper>
    <Navbar links={['works', 'about']} />
  </Main>
);

export default contact;
