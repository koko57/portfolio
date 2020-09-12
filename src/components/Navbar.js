import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Menu, X } from 'react-feather';
import { NavLinks } from './NavLinks';

const SNavWrapper = styled.div`
    margin: auto;
    width: 80%;
    max-width: 1000px;
    display: flex;
    justify-content: flex-end;
    font-size: 1.3rem;

    @media screen and (max-width: 810px) {
        flex-direction: column;
        align-items: flex-end;
        justify-content: space-around;
    }
`;

const SNav = styled.nav`
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    padding-bottom: 5rem;
    background: rgba(248, 248, 248, 0.75);

    @media screen and (max-width: 810px) {
        top: 0;
        background: ${({ scrolled, opened }) =>
            scrolled || opened ? 'rgba(248, 248, 248, 0.75)' : 'none'};
        height: ${({ opened }) => (opened ? 'auto' : '15vh')};
        padding-top: 5.5rem;
        padding-bottom: 2rem;
    }

    @media screen and (max-width: 480px) {
        padding-top: 1rem;
        height: ${({ opened }) => (opened ? 'auto' : '10vh')};
    }

    @media screen and (max-height: 480px) {
        padding-top: 2rem;
        height: ${({ opened }) => (opened ? 'auto' : '10vh')};
    }
`;

const SHamburger = styled.div`
    display: none;

    @media screen and (max-width: 810px) {
        display: block;
        position: relative;
    }

    & > .show {
        opacity: 1;
        position: absolute;
        top: 0;
        right: 0;
        transition: ease-in-out 0.4s;
    }

    & > .hide {
        opacity: 0;
    }
`;

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        const setScroll = () => {
            setScrolled(window.pageYOffset > 50);
        };
        window.addEventListener('scroll', setScroll);
        return window.removeEventListener('scroll', setScroll);
    }, []);

    const handleClick = () => {
        setOpened(!opened);
    };

    return (
        <SNav id="nav" scrolled={scrolled} opened={opened}>
            <SNavWrapper className="wrapper">
                <SHamburger onClick={handleClick}>
                    <X className={opened ? 'show' : 'hide'} />
                    <Menu className={!opened ? 'show' : 'hide'} />
                </SHamburger>
                <NavLinks opened={opened} />
            </SNavWrapper>
        </SNav>
    );
};
