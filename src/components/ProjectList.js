import React from 'react';
import styled from 'styled-components';

const SProjectList = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 6rem auto;
    flex-wrap: wrap;

    @media screen and (max-width: 810px) {
        margin: 3rem auto;
    }

    @media screen and (max-width: 480px) {
        margin: 2rem auto;
    }
`;

export const ProjectList = ({ children }) => {
    return <SProjectList>{children}</SProjectList>;
};
