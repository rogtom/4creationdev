import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import {
	hideMenuMobile,
	showMenuMobile,
	staggerLinksMobile,
	hoverExit,
	hoverLink,
	mobileHeaderSlide,
} from './Animate';

const MobileNaVContainer = styled.div`
	position: fixed;
	top: -100%;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: black;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MobileNavHeader = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 0 2rem;
	align-items: center;
	height: 100px;
	border-bottom: 2px solid green;
`;

const MobileNavCloseIcon = styled(FaTimes)`
	font-size: 2rem;
	color: white;
`;

const MobileMenuWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MobileMenu = styled.ul`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(4, 80px);
	align-content: space-evenly;
`;
const MobileMenuItem = styled.li`
	font-size: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;

const MobileMenuLink = styled(Link)`
	text-decoration: none;
	color: white;
`;

const MobileNav = ({ toggleMenu, isOpen }) => {
	let menu = useRef(null);
	let header = useRef(null);
	let link1 = useRef(null);
	let link2 = useRef(null);
	let link3 = useRef(null);
	let link4 = useRef(null);

	useEffect(() => {
		if (isOpen) {
			showMenuMobile(menu);
			mobileHeaderSlide(header);
			staggerLinksMobile(link1, link2, link3, link4);
		} else {
			hideMenuMobile(menu);
		}
	}, [isOpen]);

	return (
		<MobileNaVContainer ref={(el) => (menu = el)} isOpen={isOpen}>
			<MobileNavHeader ref={(el) => (header = el)} onClick={toggleMenu}>
				<Logo />
				<MobileNavCloseIcon onClick={toggleMenu} />
			</MobileNavHeader>
			<MobileMenuWrapper>
				<MobileMenu>
					<MobileMenuItem>
						<MobileMenuLink
							ref={(el) => (link1 = el)}
							to='/'
							onClick={toggleMenu}
							onMouseEnter={(e) => hoverLink(e)}
							onMouseOut={(e) => hoverExit(e)}>
							Home
						</MobileMenuLink>
					</MobileMenuItem>
					<MobileMenuItem>
						<MobileMenuLink
							ref={(el) => (link2 = el)}
							to='/about'
							onClick={toggleMenu}
							onMouseEnter={(e) => hoverLink(e)}
							onMouseOut={(e) => hoverExit(e)}>
							About
						</MobileMenuLink>
					</MobileMenuItem>
					<MobileMenuItem>
						<MobileMenuLink
							ref={(el) => (link3 = el)}
							to='/portfolio'
							onClick={toggleMenu}
							onMouseEnter={(e) => hoverLink(e)}
							onMouseOut={(e) => hoverExit(e)}>
							Portfolio
						</MobileMenuLink>
					</MobileMenuItem>
					<MobileMenuItem>
						<MobileMenuLink
							ref={(el) => (link4 = el)}
							to='/contact'
							onClick={toggleMenu}
							onMouseEnter={(e) => hoverLink(e)}
							onMouseOut={(e) => hoverExit(e)}>
							Contact
						</MobileMenuLink>
					</MobileMenuItem>
				</MobileMenu>
			</MobileMenuWrapper>
		</MobileNaVContainer>
	);
};

export default MobileNav;
