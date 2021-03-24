import styled from 'styled-components'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {Link} from 'react-router-dom'

export const Container = styled.div`
    width: 100%;
    text-align: center;
    background-color: #EB697F;
    position: relative;
    bottom:0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
`;

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



