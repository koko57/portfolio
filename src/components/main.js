import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { GlobalStyle } from './styled/main/global';
import { Page } from './styled/main/page';
import { Wrapper } from './styled/main/wrapper';

const Main = ({ children }) => (
  <>
    <Helmet
      title="Agata Kosior"
      meta={[
        { name: 'description', content: 'Portfolio page' },
        { name: 'keywords', content: 'portfolio, web developer' }
      ]}
      link={[
        { rel: 'icon', type: 'image/png', href: '../../static/icons/favicon.ico' }
      ]}
    />
    <GlobalStyle />
    <Page>
      <Wrapper>{children}</Wrapper>
    </Page>
  </>
);

Main.propTypes = {
  children: PropTypes.node.isRequired
};

export default Main;
