import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  border-radius: 5px;
`;
const Info = styled.p`
  display: none;
  ${Card}:hover & {
    display: block;
  }
`;

const ProjectCard = ({ name, repo, demo }) => {
  return (
    <Card>
      <h3>{name}</h3>
      <a href={`https://github.com/koko57/${repo}`} target='blank'>gh</a>
      <a href={demo} target='blank'>oko</a>
    </Card>
  );
};

export default ProjectCard;
