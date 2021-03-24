import React from 'react'
import {HeroContainer, HeroBg, VideoBg} from './hero.elements'
import Video from '../../static/videos/icecream.mp4'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero
