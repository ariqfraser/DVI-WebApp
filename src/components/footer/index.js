import React from 'react'
import Logo from '../../static/images/logo.png'
import {Container, SocialWrapper, SocialLink, FooterImg, Instagram, Facebook, Twitter, FooterText} from './footer.elements'

const Footer = () => {
    return (
        <>
            <Container>
                <SocialWrapper>
                    <SocialLink to='/'>
                        <Instagram />
                    </SocialLink>
                    <SocialLink to='/'>
                        <Facebook />
                    </SocialLink>
                    <SocialLink to='/'>
                        <Twitter />
                    </SocialLink>
                </SocialWrapper>
                <FooterText>Copyright © 2021 MAMA'S ICE CREAM LTD  - All Rights Reserved.</FooterText>
                <FooterImg src={Logo} alt=''/>
            </Container>
        </>
    )
}

export default Footer
