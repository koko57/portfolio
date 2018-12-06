import React from 'react';
import Main from '../components/main';
import Navbar from '../components/navbar';
import ProjectCard from '../components/projectCard';
import { Text } from '../components/styled/text/text';
import { Title } from '../components/styled/text/title';
import { ProjectList } from '../components/styled/content/projectList';
import { StyledText } from '../components/styled/text/styledText';
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
        demo="https://evnt57.herokuapp.com/welcome"
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
        name="Wro"
        repo="wro"
        demo="https://koko57.github.io/wro/"
        desc="List of best spots in Wroclaw."
        stack="React / Google Maps API / Foursquare API"
        img={wro}
      />
      <Text align="center" margin="2rem">
        <StyledText href="https://github.com/koko57" target="_blank">
          More on <span>GitHub</span>
        </StyledText>
      </Text>
    </ProjectList>
    <Navbar />
  </Main>
);

export default works;
