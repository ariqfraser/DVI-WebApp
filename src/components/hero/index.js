import React from 'react'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowRight, GradientOverlay} from './hero.elements'
import Video from '../../static/videos/icecream.mp4'
import {Button} from '../button.elements'


const Hero = ({modalToggle}) => {
    return (
        <HeroContainer>
            <HeroBg>
                <GradientOverlay ></GradientOverlay>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>welcome to everything ice cream!</HeroH1>
                <HeroP>At Mama's Ice Cream we are constantly coming out with new flavours.
                    Stay up to date and sign up for our newsletter!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='/' onClick={modalToggle}>Sign Up! <ArrowRight /></Button>
                    
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
