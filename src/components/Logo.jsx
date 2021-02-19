import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MyLogo } from '../assets/4cd-logo.svg';

const HeaderLogo = styled(MyLogo)`
	width: 100px;
	fill: white;
`;

const Logo = () => {
	return <HeaderLogo />;
};

export default Logo;
