import React from "react";
import styled from "styled-components";
import { Icon } from "../components/styled/content/icon";
import { icons } from "../constants/icons";

export const SIconsContainer = styled.div`
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

export const IconsContainer = () => {
	const renderIcons = () => icons.map((i) => {
		return <Icon url={i} key={i} />;
	});

	return <SIconsContainer>{renderIcons()}</SIconsContainer>;
};
