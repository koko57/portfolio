import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import { GlobalStyle } from '../styles/global';

const SPage = styled.div`
    width: 100%;
    color: #303030;
    position: relative;
`;

const SWrapper = styled.div`
    height: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding: 5rem 4rem;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        padding: 1rem 0;
    }

    @media screen and (max-height: 480px) {
        padding: 1.5rem 0;
    }
`;

const Main = ({ children }) => (
    <>
        <Helmet
            title="Agata Kosior"
            meta={[
                { name: 'description', content: 'Portfolio page' },
                { name: 'keywords', content: 'portfolio, web developer' },
            ]}
            link={[
                {
                    rel: 'icon',
                    type: 'image/png',
                    href: `${withPrefix('favicon.ico')}`,
                },
            ]}
        />
        <GlobalStyle />
        <SPage>
            <SWrapper>{children}</SWrapper>
        </SPage>
    </>
);

Main.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Main;
