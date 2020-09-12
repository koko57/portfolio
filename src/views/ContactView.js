import React from "react";
import { Title } from "../components/Title";
import { Navbar } from "../components/Navbar";
import { ContactLinksWrapper } from "../components/ContactLinksWrapper";
import { ContactLink } from "../components/ContactLink";
import { GitHub, Linkedin, Mail } from "react-feather";

export const ContactView = () => {
	return (
		<>
			<Title>Contact</Title>
			<ContactLinksWrapper className="links">
				<ContactLink href="https://github.com/koko57" target="_blank">
					<span className="logo">
						<GitHub
							size={48}
							color={"#343434"}
							strokeWidth={"1px"}
						/>
					</span>
					<span className="name">GitHub</span>
				</ContactLink>
				<ContactLink
					href="https://www.linkedin.com/in/agata-kosior/"
					target="_blank"
				>
					<span className="logo">
						<Linkedin
							size={48}
							color={"#343434"}
							strokeWidth={"1px"}
						/>
					</span>
					<span className="name">LinkedIn</span>
				</ContactLink>
				<ContactLink href="mailto:agata.kosior57@gmail.com">
					<span className="logo">
						<Mail size={48} color={"#343434"} strokeWidth={"1px"} />
					</span>
					<span className="name">Mail</span>
				</ContactLink>
			</ContactLinksWrapper>
			<Navbar />
		</>
	);
};
