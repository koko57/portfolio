import React from "react";
import styled from "styled-components";

export const STitle = styled.h1`
	font-size: ${({ main }) => (main ? "7rem" : "2rem")};
	text-transform: uppercase;
	font-weight: normal;
	cursor: default;
	width: 100%;
	text-align: left;

	@media screen and (max-width: 480px) {
		text-align: ${({ main }) => (main ? "left" : "center")};
		font-size: ${({ main }) => (main ? "5rem" : "2rem")};
	}
`;

export const Title = ({ children }) => {
	return <STitle>{children}</STitle>;
};
