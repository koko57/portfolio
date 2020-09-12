import React from "react";
import styled from "styled-components";

const SText = styled.div`
	text-align: ${({ align }) => (align ? align : "left")};
	margin: ${({ margin }) => (margin ? margin : "0")};
	width: 100%;
	font-size: 1rem;
	line-height: 1.8rem;

	@media screen and (max-width: 480px) {
		font-size: 0.8rem;
		line-height: 1.5rem;
	}
`;

export const Text = ({ children }) => {
	return <SText>{children}</SText>;
};

export default Text;
