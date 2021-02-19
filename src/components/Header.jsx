import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import MobileNav from './MobileNav';
import Logo from './Logo';
import { headerLogoAnimition, mainMenuAnimition } from './Animate';

const HeaderConteiner = styled.div`
	width: 100%;
	height: 80px;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;

	position: fixed;
	z-index: 100;
`;
const HeaderWrapper = styled.div`
	margin: 0 auto;
	padding: 0 2rem;
	width: 100%;
	height: 100%;
	max-width: 1440px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const HeaderLink = styled(Link)``;
const NavWrapper = styled.div``;

const Header = () => {
	let headerLogo = useRef(null);
	let mainMenu = useRef(null);
	let header = useRef(null);

	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		headerLogoAnimition(headerLogo);
		mainMenuAnimition(mainMenu);
	}, []);

	const toggleMavMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<HeaderConteiner ref={(el) => (header = el)}>
			<HeaderWrapper>
				<HeaderLink to='/' ref={(el) => (headerLogo = el)}>
					<Logo />
				</HeaderLink>
				<NavWrapper ref={(el) => (mainMenu = el)}>
					<NavBar isOpen={isOpen} toggleMenu={toggleMavMenu} />
				</NavWrapper>
			</HeaderWrapper>
			<MobileNav isOpen={isOpen} toggleMenu={toggleMavMenu} />
		</HeaderConteiner>
	);
};

export default Header;
