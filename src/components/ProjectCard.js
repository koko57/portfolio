import React from "react";
import { LinkIcons } from "./LinkIcons";

import styled from "styled-components";

const SProject = styled.div`
	width: 260px;
	height: 170px;
	padding: 0.5rem;
	position: relative;
	margin: 0 0 1rem;

	::after {
		content: "";
		background-image: ${({ img }) => `url(${img})`};
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: #f3f3f399;
		background-blend-mode: screen;
		transition: 0.25s ease-in;
		opacity: 0;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: -1;
	}

	:hover::after,
	:active::after {
		opacity: 1;
	}

	@media screen and (max-width: 480px) {
		width: 100%;
		height: 225px;
		padding: 1.5rem;

		::after {
			opacity: 0.7;
			background-size: cover;
			background-position: top;
		}
	}

	p {
		font-size: 1rem;
		:last-of-type {
			font-size: 0.8rem;
		}
	}

	h2 {
		font-size: 1.3rem;
		font-weight: normal;
	}
`;

export const ProjectCard = ({ name, repo, demo, desc, stack, img }) => {
	return (
		<SProject img={img}>
			<h2>{name}</h2>
			<p>{desc}</p>
			<p>{stack}</p>
			<LinkIcons repo={repo} demo={demo} />
		</SProject>
	);
};
