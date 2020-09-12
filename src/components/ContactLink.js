import React from "react";
import styled from "styled-components";
import { StyledUnderline } from "../styles/variables";

export const SContactLink = styled.a`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	.logo {
		margin-bottom: 0.75rem;
		${StyledUnderline};
	}

	.name {
		font-family: "Playfair Display", serif;
	}

	@media screen and (max-width: 480px) {
		margin: 1rem auto 2rem;
	}

	@media (hover: hover) {
		:hover .logo::after {
			width: 80%;
		}
	}
`;

export const ContactLink = ({ href, children }) => {
	return (
		<SContactLink href={href} target="_blank">
			{children}
		</SContactLink>
	);
};
