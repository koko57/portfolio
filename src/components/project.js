import React from 'react';
import { Code, Link } from 'react-feather';
import { Card, LinkIcons } from './styled/projectCard';

const ProjectCard = ({ name, repo, demo, desc, stack, img }) => {
  return (
    <Card img={img}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{stack}</p>
      <div className="icons">
        <LinkIcons href={`https://github.com/koko57/${repo}`} target="blank">
          <Code size={16} />
          <span>Code</span>
        </LinkIcons>
        <LinkIcons href={demo} target="_blank">
          <Link size={16} />
          <span>Demo</span>
        </LinkIcons>
      </div>
    </Card>
  );
};

export default ProjectCard;
