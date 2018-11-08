import React from 'react';
import { Title } from '../components/styled';
import  Navbar  from '../components/navbar';
import Main from '../components/main';

const index = () => (
  <Main>
    <Title size={'8rem'}>A.</Title>
    <p>Agata Kosior</p>
    <p>Front End / JavaScript Developer</p>
    <Navbar links={['', 'works']}></Navbar>
  </Main>
);

export default index;
