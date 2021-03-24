import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px 16px;
    flex-wrap: wrap;
    
`;

export const ItemWrapper = styled(Link)`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 300px;
    text-decoration: none;
    color: #232323;
    margin: 1rem 2rem;

    @media screen and (max-width: 768px){
        width: 150px;
    }

`;

export const ItemImg = styled.img`
    width: 100%;
    margin: 0 0 8px 0;
`;

export const ItemName = styled.h2`
    font-size: 22px;
    margin: 0;
`;

export const Tag = styled.small`
    font-size: 1rem;
    
`;

export const SectionTitle = styled.h2`
    

    text-align: center;
    margin: 2rem 0 0 0;
    color: #EB697F;
`;