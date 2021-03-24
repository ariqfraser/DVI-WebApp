import React from 'react'
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinkS, NavBtn, NavBtnLink} from './navbar.elements'
import {FaBars} from 'react-icons/fa'

const Navbar = ({ toggle, isOpen }) => {
    return (
        <>
            <Nav isOpen={isOpen}>
                <NavbarContainer>
                    <NavLogo to='/'>chagne</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem><NavLinkS to='about'>About</NavLinkS></NavItem>
                        <NavItem><NavLinkS to='about'>About</NavLinkS></NavItem>
                        <NavItem><NavLinkS to='about'>About</NavLinkS></NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to='/'>Click</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
