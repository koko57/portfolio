import React from "react";
import styled from "styled-components";
import { Text } from "../components/styled/text/text";
import { Title } from "../components/styled/text/title";
import Navbar from "../components/navbar";
import { Icons } from "../components/Icons";

export const HomePageWrapper = styled.div`
	padding: 0 4rem;

	@media screen and (max-width: 480px) {
		padding: 1rem 2.5rem;
	}

	@media screen and (max-height: 480px) {
		padding: 0 2rem;
	}
`;

export const HomePageView = () => {
	// todo: move navbar to page wrapper
	return (
		<>
			<HomePageWrapper>
				<Title main>A.</Title>
				<Text>
					<p>Agata Kosior</p>
					<p>Front-End / JavaScript Developer</p>
					<p>
						Programming enthusiast, coffee connoiseur, music
						aficionado.
						<br />
						Aspiring to become a Full Stack Ninja. <br />
						Looking for new challenges in the IT world.
					</p>
				</Text>
				<Icons />
			</HomePageWrapper>
			<Navbar />
		</>
	);
};
