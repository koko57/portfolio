import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { StyledUnderline } from '../styles/variables';

const SStyledLink = styled(Link)`
    margin: 0 1rem;
    ${StyledUnderline}

    :active,
    &.current {
        opacity: 0.5;
        transition: ease-out 0.25s;
        ::after {
            width: 15%;
        }
    }

    @media (hover: hover) {
        :hover::after {
            width: 80%;
        }
    }
`;

export const StyledLink = ({ children, to }) => {
    return <SStyledLink to={to}>{children}</SStyledLink>;
};
