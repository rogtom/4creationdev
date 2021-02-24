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
position: relative;

@media screen and (max-width: 768px) {
	flex-direction: column-reverse;
	height: 100%;

}
`

const HeroBg = styled.div`
width: 100%;
height: 100vh;
background: linear-gradient(to bottom, rgb(0,0,0,0.1) 0%, rgb(0,0,0,0.3) 50%, rgb(0,0,0,0.5) 100%), url(${Bg});
background-position: top right;
background-size: cover;
background-repeat: no-repeat;

@media (max-width:1300px) {
	background-position: center;

}
@media (max-width:910px) {
	width: 100%;
	background: linear-gradient(to bottom, rgb(0,0,0,0.9) 0%,rgb(0,0,0,0.3) 15%, rgb(0,0,0,0.2) 50%, rgb(0,0,0,0.2) 100%), url(${BgMobile});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
}
`
const HeroContentWrapper = styled.div`

height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
position: absolute;
left: 10%;

@media screen and (max-width: 768px) {
	min-height:400px;
	height: auto;
	max-height:600px;
	width: 100%;
	padding-top:80px;
	position: static;
	background: #000;
}
`
const HeroContent = styled.div`
color: white;

@media screen and (max-width: 768px) {
	display:flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}`


const Hero = () => {
	return (
		<HeroContainer>
			<HeroBg/>
			<HeroContentWrapper>
				<HeroContent>
					<h3>Hi,</h3>
					<span>I'm <h1> Tomasz Rogala</h1></span>
					<span>&&, I'm <h2> JavaScript developer</h2></span>
				</HeroContent>
			</HeroContentWrapper>


		</HeroContainer>
	)
}

export default Hero
