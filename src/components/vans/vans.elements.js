import styled from 'styled-components'
import Big from './Van.jpg'

export const Container = styled.div`
    width: 100%;
    min-height: 600px;
    margin: 0;
    display: flex;
    justify-content: center;
    background-color: #FFFEFD;

    @media screen and (max-width: 768px){
        min-height: 0;
    }

`;

export const SplitL = styled.div`
    width: 50%;
    
    background-image: url(${Big});
    background-position: center;

    @media screen and (max-width: 768px){
        display:none;

    }
`;

export const SplitR = styled.div`
    width: 50%;
    //padding: 0 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px){
        width: 100%;

    }
`;


export const SectionTitle = styled.h2`
    
    text-align: center;
    margin: 2rem 0 0 0;
    color: #EB697F;
`;

export const SectoionP = styled.p`
    color: #515151;
    font-size: 1.5rem;
    max-width: 500px;
`;
