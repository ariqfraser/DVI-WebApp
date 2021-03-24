import styled from 'styled-components'
import {MdKeyboardArrowRight} from 'react-icons/md'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 600px;
    position: relative;
    z-index: 1;
    
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;height: 100%;
    overflow: hidden;

`;

export const GradientOverlay = styled.div`
    background-image: linear-gradient(to right,#EB697F, #D898A5);
    width: 100%;
    height: calc(100vh - 80px);
    min-height: 600px;
    object-fit: cover;
    position: absolute;
    z-index: 2;
    opacity: 30%;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    //filter: brightness(70%);
    

`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: ccenter;

    @media screen and (max-width: 768px){
        font-size: 40px;

    }

    @media screen and (max-width: 480px){
        font-size: 32px;
        
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;

    }

    @media screen and (max-width: 480px){
        font-size: 18px;
        
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;