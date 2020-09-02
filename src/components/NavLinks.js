import React from "react";
import styled from "styled-components";
import { StyledLink } from "./styled/links/styledLink";

export const NavLink = styled(StyledLink)`
	@media screen and (max-width: 810px) {
		margin: 1rem 0;
		font-size: 1.1rem;
	}
`;

export const SNavLinksWrapper = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	justify-content: flex-end;

	@media screen and (max-width: 810px) {
		display: none;
		flex-direction: column;
		align-items: flex-end;
		padding-bottom: 2rem;

		&.show {
			display: flex;
		}
	}
`;

export const NavLinks = ({ opened }) => {
	return (
		<SNavLinksWrapper className={opened ? "show" : null}>
			<NavLink
				to="/"
				activeClassName="current"
				className={opened ? "show" : null}
			>
				About
			</NavLink>
			<NavLink
				to="/works"
				activeClassName="current"
				className={opened ? "show" : null}
			>
				My Works
			</NavLink>
			<NavLink
				to="/contact"
				activeClassName="current"
				className={opened ? "show" : null}
			>
				Contact
			</NavLink>
		</SNavLinksWrapper>
	);
};
