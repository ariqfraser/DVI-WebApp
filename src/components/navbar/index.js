import React from 'react'
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinkS, NavBtn, NavBtnLink, NavLinkR} from './navbar.elements'
import {FaBars} from 'react-icons/fa'
import logo from '../../static/images/logo.png'

const Navbar = ({ toggle, isOpen, modalToggle }) => {
    return (
        <>
            <Nav isOpen={isOpen}>
                <NavbarContainer>
                    <NavLogo to='/'><img src={logo} alt=''/></NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        {/* <NavItem><NavLinkR to='/#about'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}


                        >About</NavLinkR></NavItem> */}
                        <NavItem><NavLinkR to='/'>Home</NavLinkR></NavItem>

                        <NavItem><NavLinkR to='/flavours'>Flavours</NavLinkR></NavItem>
                        <NavItem><NavLinkR to='/events'>Events</NavLinkR></NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink onClick={modalToggle}>Newsletter</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
