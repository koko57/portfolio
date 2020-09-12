import React from "react";
import styled from "styled-components";
import { Link, Code } from "react-feather";

const SLinkIcon = styled.a`
	display: inline-block;
	padding: 0.5rem;
	margin-bottom: 1rem;
	align-items: center;
	height: 1rem;
	&:hover {
		span {
			opacity: 1;
		}
	}
	
	span {
		font-family: "Oxygen", sans-serif;
		font-size: 0.9rem;
		opacity: 0;
		transition: ease-in 0.25s;
		margin: 0 0.5rem;
		vertical-align: 0.2rem;
		
		@media screen and (max-width: 360px) {
			opacity: 1;
		}
	}
`;

const SLinkIconsWrapper = styled.div`
	display: flex;
	position: absolute;
	bottom: 0.5rem;
	justify-content: space-around;
	
	@media screen and (max-width: 480px) {
		bottom: 1rem;
		left: 2rem;
	}
`;

export const LinkIcons = ({ repo, demo }) => {
	return (
		<SLinkIconsWrapper>
			<SLinkIcon
				href={`https://github.com/koko57/${repo}`}
				target="blank"
			>
				<Code size={16} />
				<span>Code</span>
			</SLinkIcon>
			<SLinkIcon href={demo} target="_blank">
				<Link size={16} />
				<span>Demo</span>
			</SLinkIcon>
		</SLinkIconsWrapper>
	);
};
