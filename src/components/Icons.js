import React from "react";
import styled from "styled-components";
import { icons } from "../constants/icons";
import { withPrefix } from "gatsby";

const SIconsWrapper = styled.div`
	display: flex;
	align-content: center;
	justify-content: space-around;
	flex-wrap: wrap;
	margin: 0 -1rem;

	@media screen and (max-width: 810px) {
		justify-content: space-evenly;
	}

	@media screen and (max-width: 480px) {
		margin: 0 -0.5rem;
	}
`;

const SIcon = styled.div`
	height: 2.5rem;
	width: 2.5rem;
	background-image: url(${({ url }) => withPrefix(`icons/${url}.png`)});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	margin: 1rem;
	opacity: 0.6;
	transition: 0.25s ease-in-out;

	:hover {
		opacity: 0.8;
	}

	@media screen and (max-width: 480px) {
		height: 2rem;
		width: 2rem;
		margin: 0.5rem;
	}
`;

export const Icons = () => {
	const renderIcons = () =>
		icons.map((i) => {
			return <SIcon url={i} key={i} />;
		});

	return <SIconsWrapper>{renderIcons()}</SIconsWrapper>;
};
