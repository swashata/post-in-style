import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Writer from './components/Writer';
import { ReactComponent as LogoSVG } from './LogoFeather.svg';

const Header = styled.header`
	background-color: #102a43;
	padding: 50px 20px 150px 20px;
	display: flex;
	flex-flow: row nowrap;
	align-items: center;
	justify-content: center;
`;

const AppContainer = styled.div`
	min-height: calc(100vh - 20px);
	display: flex;
	flex-flow: column nowrap;
`;

const LogoEmoji = styled.div`
	height: 70px;
	width: 70px;
	border-radius: 64px;
	background-color: #243b53;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 38px;
	margin: 0 20px 0 0;
	flex: 0 0 70px;
	svg {
		display: block;
		height: 1em;
		width: 1em;
	}

	@media screen and (min-width: 600px) {
		height: 128px;
		width: 128px;
		flex-basis: 128px;
		font-size: 64px;
	}
`;

const Heading = styled.h1`
	font-size: 24px;
	text-align: center;
	color: #fff;
	margin: 0;
	text-align: center;
	padding: 0;
	font-family: 'Lobster', cursive;
	font-weight: 400;
	letter-spacing: 1px;
	@media screen and (min-width: 600px) {
		font-size: 48px;
	}
`;

const SubHeading = styled.h2`
	font-size: 18px;
	text-align: center;
	color: #486581;
	margin: 40px auto 40px auto;
	max-width: 700px;
	text-align: center;
	padding: 0;
	font-weight: normal;
	@media screen and (min-width: 600px) {
		font-size: 24px;
	}
`;

const AppArea = styled.main`
	border-radius: 6px;
	margin: -100px auto 20px auto;
	max-width: 700px;
	width: 80vw;
	padding: 20px;
	background-color: #fff;
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

const Footer = styled.footer`
	margin: auto 0 0 0;
	padding: 20px;
	font-size: 16px;
	overflow: hidden;
	p.copy {
		text-align: center;
		margin: 0;
	}
`;

const Alert = styled.aside`
	background-color: #facdcd;
	border-radius: 4px;
	padding: 10px 20px;
	color: #610404;
	font-weight: bold;
	margin: 20px 0 0;
`;

const ParalleloUl = styled.ul`
	list-style: none;
	margin: 40px auto;
	padding: 20px 40px;
	transform: skewX(-10deg);
	max-width: 600px;
	background-color: #e5ebf1;
	font-size: 22px;
	text-align: left;
	font-family: 'Lobster', cursive;
	border-radius: 6px;
	color: #334e68;
	li {
		margin: 15px 0;
		transform: skewX(10deg);
		display: flex;
		align-items: flex-start;
		justify-content: flex-start;
		.emoji {
			flex: 0 0 26px;
			margin: 0 10px 0 0;
		}
	}
`;

const Global = createGlobalStyle`
	html {
		background-color: #102A43;
		padding: 0 20px 20px 20px;
	}
	body {
		background-color: #F0F4F8;
		color: #102A43;
		font-family: 'Lato', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}

	a {
		color: #044E54;
		text-decoration: underline;
		&:hover {
			text-decoration: none;
		}
	}
`;

export default function App() {
	return (
		<AppContainer className="app">
			<Global />
			<Header>
				<LogoEmoji>
					<LogoSVG />
				</LogoEmoji>
				<Heading aria-label="Post In Style">Post In Style</Heading>
			</Header>
			<AppArea>
				<Writer />
				<Alert>
					The text written with this technique is{' '}
					<u>not screen reader friendly</u>. Use with caution.
				</Alert>
			</AppArea>
			<Footer>
				<SubHeading>
					A simple toolkit to help you write text in bold, italic,
					script in platforms like instagram, facebook, twitter etc.
				</SubHeading>

				<ParalleloUl>
					<li>
						<span
							className="emoji"
							role="img"
							aria-label="Write Icon"
						>
							✍
						</span>{' '}
						Write in style on Facebook, Instagram, Twitter &amp;
						more.
					</li>
					<li>
						<span
							className="emoji"
							role="img"
							aria-label="Apple Icon"
						>
							🍎
						</span>{' '}
						Works with iOS, Android, Mac &amp; PC.
					</li>
					<li>
						<span
							className="emoji"
							role="img"
							aria-label="Support Icon"
						>
							🎗
						</span>{' '}
						Supports Bold, Italic, Script styles.
					</li>
					<li>
						<span
							className="emoji"
							role="img"
							aria-label="Bullet Icon"
						>
							🛂
						</span>{' '}
						Custom Bullet list with Emoji.
					</li>
				</ParalleloUl>
				<p className="copy">
					&copy; {new Date().getFullYear()}{' '}
					<a href="https://swas.io">Swashata Ghosh</a>. Made with ❤️
					and some inspirations.
				</p>
			</Footer>
		</AppContainer>
	);
}
