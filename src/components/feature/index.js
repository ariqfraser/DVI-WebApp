import React from 'react'
import { Container, ItemImg, ItemName, ItemWrapper, Tag, SectionTitle, Section } from './feature.elements'
import Caramel from '../../static/images/icecream/cs.jfif'
import Cookie from '../../static/images/icecream/cookie.webp'
import Berry from '../../static/images/icecream/berry.jfif'
import Mint from '../../static/images/icecream/mint.jfif'
import { SmallLine } from '../line.elements'

const Feature = () => {
    return (
        <>
            <Section>
                <SectionTitle>Featured Flavours</SectionTitle>
                <SmallLine></SmallLine>
                <Container>
                    
                    <ItemWrapper to='/flavours'>
                        <ItemImg src={Caramel} alt=''/>
                        <Tag>NEW</Tag>
                        <ItemName>Caramel Shortbread</ItemName>
                    </ItemWrapper>
                    <ItemWrapper to='/flavours'>
                        <ItemImg src={Cookie} alt=''/>
                        <Tag>NEW</Tag>
                        <ItemName>Cookie Nero</ItemName>
                    </ItemWrapper>
                    <ItemWrapper to='/flavours'>
                        <ItemImg src={Berry} alt=''/>
                        <Tag>NEW</Tag>
                        <ItemName>Raspberry Ripple</ItemName>
                    </ItemWrapper>
                    <ItemWrapper to='/flavours'>
                        <ItemImg src={Mint} alt=''/>
                        <Tag>NEW</Tag>
                        <ItemName>Mint Chocolate Chip</ItemName>
                    </ItemWrapper>
                </Container>
            </Section>
        </>
    )
}

export default Feature
