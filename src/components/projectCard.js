import React from 'react';
import { Code, Link } from 'react-feather';
import { LinkIcon } from './styled/links/linkIcon';
import { LinkIconsWrapper } from './styled/links/linkIconsWrapper';
import { Project } from './styled/content/project';

const ProjectCard = ({ name, repo, demo, desc, stack, img }) => {
  return (
    <Project img={img}>
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{stack}</p>
      <LinkIconsWrapper>
        <LinkIcon href={`https://github.com/koko57/${repo}`} target="blank">
          <Code size={16} />
          <span>Code</span>
        </LinkIcon>
        <LinkIcon href={demo} target="_blank">
          <Link size={16} />
          <span>Demo</span>
        </LinkIcon>
      </LinkIconsWrapper>
    </Project>
  );
};

export default ProjectCard;
