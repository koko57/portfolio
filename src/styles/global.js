import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
		@import url('https://fonts.googleapis.com/css?family=Playfair+Display|Oxygen');

		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			background-color: #f8f8f8;
		}

		h1, h2 {
			font-family: 'Playfair Display', serif;
		}

		p {
			font-family: 'Oxygen';
			font-weight: normal;
			margin: 1rem auto;
		}

		a {
			text-decoration: none;
			color: #303030;
			&:visited, &:active {
				color: #303030;
			}
		}
`;
