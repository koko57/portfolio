import React from 'react';
import { Text } from '../components/styled/text/text';
import { Title } from '../components/styled/text/title';
import Navbar from '../components/navbar';
import Main from '../components/main';
import { Icon } from '../components/styled/content/icon';
import { IconsDiv } from '../components/styled/content/iconsDiv';
import { AboutPageWrapper } from '../components/styled/main/aboutPageWrapper';

const iconsNames = [
  'html',
  'css',
  'js',
  'react',
  'redux',
  'git',
  'sass'
];

const icons = iconsNames.map(i => {
  return <Icon url={i} key={i} />;
});

const index = () => (
  <Main>
    <AboutPageWrapper>
      <Title main>A.</Title>
      <Text>
        <p>Agata Kosior</p>
        <p>Junior Front End / JavaScript Developer</p>
        <p>
          Programming enthusiast, coffee connoiseur, music aficionado.
          <br />
          Aspiring to become a Full Stack Ninja. <br />
          Looking for my first job in the IT world.
        </p>
      </Text>
      <IconsDiv>{icons}</IconsDiv>
    </AboutPageWrapper>
    <Navbar />
  </Main>
);

export default index;
