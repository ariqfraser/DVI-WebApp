import styled from 'styled-components'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
    background: RGBA(235, 105, 127, 0.8);
    height: 80px;
    //margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    width: 100%;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: all 0.2s ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 10;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color: red;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;

    & img {
        margin-top:0px;
        height: 70px;
    }
`;


export const MobileIcon = styled.div`
    display: none;


    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        color: white;
        top: 0;
        right: 0;
        transform: translate(-100%, 70%);
        font-size: 1.8rem;
        cursor: pointer;
        
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-left: -30px;
    padding: 0;

    @media screen and (max-width:768px){
        display:none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinkR = styled(LinkR)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavLinkS = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    &.active {
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 758px){
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #FBAD26;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    filter: drop-shadow(0px 0px 2px #FBAD26);

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #010606;
        background: #fff;
        filter: drop-shadow(0px 0px 4px #fff);
    }

        
`;
