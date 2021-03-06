import React from 'react';
import styled from 'styled-components';

const SContactLinksWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    width: 100%;
    max-width: 640px;
    margin: 18% auto;

    @media screen and (max-width: 480px) {
        flex-direction: column;
        margin: 2rem auto;
    }
`;

export const ContactLinksWrapper = ({ children }) => {
    return <SContactLinksWrapper>{children}</SContactLinksWrapper>;
};
