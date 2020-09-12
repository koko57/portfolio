import React from 'react';
import styled from 'styled-components';
import { StyledUnderline } from '../styles/variables';

const SStyledText = styled.a`
    span {
        ${StyledUnderline}
    }
    @media (hover: hover) {
        :hover span::after {
            width: 80%;
        }
    }
    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const StyledText = ({ children }) => {
    return <SStyledText>{children}</SStyledText>;
};
