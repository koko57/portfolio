import React from 'react';
import { Title } from '../components/styled';
import Main from '../components/main';
import ProjectCard from '../components/projectCard';

const portfolio = () => {
  return (
    <Main>
      <Title>my works</Title>
      <ProjectCard name='Evnt' repo='Evnt' demo={''}/>
      <ProjectCard name='MemoryGame' repo='MemoryGame' demo='https://koko57.github.io/MemoryGame/'/>
      <ProjectCard name='Evnt' repo='Evnt' demo={''}/>
    </Main>
  );
};

export default portfolio;
