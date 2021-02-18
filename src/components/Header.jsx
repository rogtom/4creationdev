import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/4cd-logo.svg';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const HeaderConteiner = styled.div`
	width: 100%;
	height: 80px;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	/* justify-content: space-between; */
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

const HeaderLogo = styled(Logo)`
	width: 100px;
`;

const Header = () => {
	return (
		<HeaderConteiner>
			<HeaderWrapper>
				<HeaderLink to='/'>
					<HeaderLogo />
				</HeaderLink>
				<NavBar />
			</HeaderWrapper>
		</HeaderConteiner>
	);
};

export default Header;
