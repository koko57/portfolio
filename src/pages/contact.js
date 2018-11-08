import React from 'react';
import { Title } from '../components/styled';
import Navbar from '../components/navbar';
import Main from '../components/main';
import { GitHub, Linkedin, Mail } from 'react-feather';

const contact = () => (
  <Main>
    <Title size={'2rem'}>Contact me</Title>
    <a href="https://github.com/koko57">
      <GitHub />
    </a>
    <a href="">
      <Linkedin />
    </a>
    <a href="">
      <Mail />
    </a>

    <Navbar links={['works', 'about']} />
  </Main>
);

export default contact;
