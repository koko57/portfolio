import React from 'react';
import { Title, Text } from '../components/styled/text';
import Navbar from '../components/navbar';
import Main from '../components/main';

const index = () => (
  <Main>
    <Title size={'8rem'} pad={'4rem'}>
      A.
    </Title>
    <Text pad='0 4rem'>
      <p>Agata Kosior</p>
      <p>Junior Front End / JavaScript Developer</p>
    </Text>
    <Navbar links={['', 'works']} />
  </Main>
);

export default index;
