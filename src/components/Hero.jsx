import React from 'react'
import styled from 'styled-components'
import Bg from "../assets/me.jpeg";
import BgMobile from "../assets/me-mobile.jpg";

const HeroContainer = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const HeroBg = styled.div`
width: 100%;
height: 100vh;
background:  url(${Bg});
background-position: top right;
background-size: cover;
background-repeat: no-repeat;

@media (max-width:1300px) {
	background-position: center;

}
@media (max-width:910px) {
	background:  url(${BgMobile});
	background-position: center center;



}
`


const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg/>


		</HeroContainer>
	)
}

export default Hero
