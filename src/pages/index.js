import React from 'react';
import { Text } from '../components/styled/text/text';
import { Title } from '../components/styled/text/title';
import Navbar from '../components/navbar';
import Main from '../components/main';
import { Icon } from '../components/styled/content/icon';
import { IconsDiv } from '../components/styled/content/iconsDiv';

const iconsNames = [
  'html',
  'css',
  'js',
  'react',
  'redux',
  'git',
  'sass',
  'nodejs',
  'python',
  'ps'
];

const icons = iconsNames.map(i => {
  return <Icon url={i} key={i} />;
});

const index = () => (
  <Main>
    <Title size={'7rem'} pad={'4rem'} main>
      A.
    </Title>
    <Text pad="0 4rem">
      <p>Agata Kosior</p>
      <p>Junior Front End / JavaScript Developer</p>
      <p>
        Programming enthusiast, music connoiseur, coffee aficionado. Looking for
        my first job in IT world.
      </p>
    </Text>
    <IconsDiv>{icons}</IconsDiv>
    <Navbar />
  </Main>
);

export default index;
