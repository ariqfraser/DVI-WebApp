import styled from 'styled-components'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100vw;
    text-align: center;
    background-color: #EB697F;
    position: relative;
    bottom:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
    
    @media screen and (max-width: 960px){
        margin-top: 20%;
    }


`;

export const Slant = styled.div`
    width: 100vw;
    height: 35%;
    display: block;
    position: absolute;
    top: calc(0px - 20%);
    background-color: #EB697F;
    z-index: 0;

    tranform: skewY(2deg);
    -webkit-transform: skewY(2deg); /* Safari & Chrome */
    -moz-transform: skewY(2deg); /* Firefox */
    -ms-transform: skewY(2deg); /* Internet Explorer */
    -o-transform: kewY(2deg); /* Opera */
}

`

export const SocialWrapper = styled.div`
    display: flex;
    jusify-content: space-between;
`;

export const SocialLink = styled(Link)`

`;

export const FooterImg = styled.img`
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    width: 20%;
`;

export const Facebook = styled(AiFillFacebook)`
    font-size: 2rem;
    color: white;
`;

export const Instagram = styled(AiFillInstagram)`
    font-size: 2rem;
    color: white;
`;

export const Twitter = styled(AiFillTwitterSquare)`
    font-size: 2rem;
    color: white;
`;

export const FooterText = styled.p`
    padding: 0;
    margin: 1rem 0;
    font-size:1rem;
    color: white;
`;



