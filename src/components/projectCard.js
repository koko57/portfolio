import React from 'react';
import { Code, Link } from 'react-feather';
import { Text } from './styled/text';
import { LinkIcon, LinkIcons } from './styled/links';
import { Card } from './styled/project';

const ProjectCard = ({ name, repo, demo, desc, stack, img }) => {
  return (
    <Card img={img}>
      <Text>
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{stack}</p>
      </Text>
      <LinkIcons>
        <LinkIcon href={`https://github.com/koko57/${repo}`} target="blank">
          <Code size={16} />
          <span>Code</span>
        </LinkIcon>
        <LinkIcon href={demo} target="_blank">
          <Link size={16} />
          <span>Demo</span>
        </LinkIcon>
      </LinkIcons>
    </Card>
  );
};

export default ProjectCard;

// TODO: do sth with this text section
