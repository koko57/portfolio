import React from 'react';
import styled from 'styled-components';
import { Code, Link } from 'react-feather';

const Card = styled.div`
  width: 300px;
  border-radius: 5px;
`;
const LinkIcons = styled.a`
  margin: 0.5rem;
  &:hover {
    color: #757575;
  }
`;

const ProjectCard = ({ name, repo, demo }) => {
  return (
    <Card>
      <p>{name}</p>
      <LinkIcons href={`https://github.com/koko57/${repo}`} target="blank">
        <Code size={'1rem'} />
      </LinkIcons>
      <LinkIcons href={demo} target="blank">
        <Link size={'1rem'} />
      </LinkIcons>
    </Card>
  );
};

export default ProjectCard;
