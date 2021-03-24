import React from 'react'
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinkS, NavBtn, NavBtnLink, NavLinkR} from './navbar.elements'
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
                        <NavItem><NavLinkR to='/#about'>About</NavLinkR></NavItem>
                        <NavItem><NavLinkR to='/flavours'>Flavours</NavLinkR></NavItem>
                        <NavItem><NavLinkR to='/events'>Events</NavLinkR></NavItem>
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
