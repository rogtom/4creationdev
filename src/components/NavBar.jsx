import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { mainMenuAnimition } from './Animate';

const NavBarContainer = styled.nav`
	height: 100%;
	display: flex;
	align-items: center;
`;
const NavBarIcon = styled(FaBars)`
	display: none;

	color: white;

	@media screen and (max-width: 768px) {
		display: block;
		font-size: 1.5rem;
	}
`;
const NavBarMenu = styled.ul`
	height: 100%;
	display: flex;
	align-items: center;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;
const NavBarItem = styled.li`
	height: 80px;
	list-style: none;
`;

const NavBarLink = styled(NavLink)`
	color: whitesmoke;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;

	&.active {
		border-bottom: 3px solid #06700b;
	}
`;

const NavBar = ({ toggleMenu, isOpen }) => {
	let mainMenu = useRef(null);

	return (
		<NavBarContainer ref={(el) => (mainMenu = el)}>
			<NavBarIcon onClick={toggleMenu} />
			<NavBarMenu>
				<NavBarItem>
					<NavBarLink to='/'>Home</NavBarLink>
				</NavBarItem>
				<NavBarItem>
					<NavBarLink to='/about'>About</NavBarLink>
				</NavBarItem>
				<NavBarItem>
					<NavBarLink to='/portfolio'>Portfolio</NavBarLink>
				</NavBarItem>
				<NavBarItem>
					<NavBarLink to='/contact'>Contact</NavBarLink>
				</NavBarItem>
			</NavBarMenu>
		</NavBarContainer>
	);
};

export default NavBar;
