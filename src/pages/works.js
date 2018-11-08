import React from 'react';
import { Title } from '../components/styled';
import Main from '../components/main';
import Navbar from '../components/navbar';
import ProjectCard from '../components/projectCard';

const works = () => (
  <Main>
    <Title>my works</Title>
    <ProjectCard name="Evnt" repo="Evnt" demo={''} />
    <ProjectCard
      name="MemoryGame"
      repo="MemoryGame"
      demo="https://koko57.github.io/MemoryGame/"
    />
    <ProjectCard name="Evnt" repo="Evnt" demo={''} />
    <Navbar links={['about', 'contact']} />
  </Main>
);

export default works;
