import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Page, Wrapper, GlobalStyle } from './styled/styled';

const Main = ({ children }) => (
  <>
    <Helmet
      title="AK"
      meta={[
        { name: 'description', content: 'Portfolio page' },
        { name: 'keywords', content: 'portfolio, web developer' }
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        href="../static/favicon.ico"
        sizes="16x16"
      />
      <html lang="en" />
    </Helmet>
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
