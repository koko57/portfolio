import React from 'react';
import Main from '../components/main';
import Navbar from '../components/navbar';
import ProjectCard from '../components/projectCard';
import { Title, Text } from '../components/styled/text';
import { ProjectList } from '../components/styled/project';
import { StyledA } from '../components/styled/links';
import memory from '../../static/img/memory.png';
import evnt from '../../static/img/evnt.png';
import wro from '../../static/img/wro.png';

const works = () => (
  <Main>
    <Title>my works</Title>
    <ProjectList>
      <ProjectCard
        name="Evnt"
        repo="Evnt"
        demo="http://evnt-220710.appspot.com/"
        desc="Event planner app."
        stack="React / Redux / Node.js / MongoDB"
        img={evnt}
      />
      <ProjectCard
        name="MemoryGame"
        repo="MemoryGame"
        demo="https://koko57.github.io/MemoryGame/"
        desc="Simple VanillaJS card matching game."
        stack="VanillaJS"
        img={memory}
      />
      <ProjectCard
        name="WrocFavs"
        repo="wrocfavs"
        demo="https://koko57.github.io/wrocfavs/"
        desc="List of favourite spots in Wroclaw."
        stack="React / Google Maps API / Foursquare API"
        img={wro}
      />
    </ProjectList>
    <Text align="center" margin="3rem 0">
      More on{'   '}
      <StyledA href="https://github.com/koko57" target="_blank">
        GitHub
      </StyledA>
    </Text>
    <Navbar links={['about', 'contact']} />
  </Main>
);

export default works;
