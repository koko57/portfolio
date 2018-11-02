import React from 'react';
import { Link } from 'gatsby';
import { Title } from '../components/styled';
import Main from '../components/main';

const index = () => (
  <Main>
    <Title large>Agata Kosior</Title>
    <p>
      let job = "doc";
      <br />
      job = job.replace(job.slice(-2), 'ev');
    </p>
    <Link to="/portfolio/">my works --></Link>
  </Main>
);

export default index;
