import React from "react";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";
import { Text } from "../components/Text";
import { Title } from "../components/Title";
import { ProjectList } from "../components/ProjectList";
import { StyledText } from "../components/StyledText";
import memory from "../../static/img/memory.png";
import evnt from "../../static/img/evnt.png";
import wro from "../../static/img/wro.png";

export const WorksView = () => {
	return (
		<>
			<Title>my works</Title>
			<ProjectList>
				<ProjectCard
					name="Evnt"
					repo="Evnt"
					demo="https://evnt57.herokuapp.com/welcome"
					desc="Event planner app."
					stack="React / Redux / Node.js / MongoDB"
					img={evnt}
				/>
				<ProjectCard
					name="MemoryGame"
					repo="MemoryGame"
					demo="https://koko57.github.io/MemoryGame/"
					desc="Simple VanillaJS card matching game."
					stack="VanillaJS"
					img={memory}
				/>
				<ProjectCard
					name="Wro"
					repo="wro"
					demo="https://koko57.github.io/wro/"
					desc="List of best spots in Wroclaw."
					stack="React / Google Maps API / Foursquare API"
					img={wro}
				/>
				<Text align="center" margin="2rem">
					<StyledText
						href="https://github.com/koko57"
						target="_blank"
					>
						More on <span>GitHub</span>
					</StyledText>
				</Text>
			</ProjectList>
			<Navbar />
		</>
	);
};
