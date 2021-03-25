import React from 'react'

import {Container, SectionTitle, SectoionP, SplitL,SplitR, AboutImg} from './about.elements'
import {SmallLine} from '../line.elements'

const About = () => {
    return (
        <>
            <Container id='about'>
                <SplitL>
                    <SectionTitle>About Mama's Ice Cream</SectionTitle>

                    <SectoionP>
                    Produced in the heart of Portobello since 1831, Mama’s is a family owned and run business, entrenched in the community of Edinburgh.  Learning how to make ice cream while working at a local hotel Amato Castiglione dreamt of starting his own business and managed to save just enough to begin production in the family home.


                    </SectoionP>
                </SplitL>
                <SplitR>
                </SplitR>
            </Container>
        </>
    )
}

export default About
