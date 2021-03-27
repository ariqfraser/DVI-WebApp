import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinkR, SideBtnWrap, SidebarRoute} from './sidebar.elements'

const Sidebar = ({isOpen, toggle, modalToggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinkR to='/'>Home</SidebarLinkR>
                    <SidebarLinkR to='/flavours'>Flavours</SidebarLinkR>
                    <SidebarLinkR to='/events'>Events</SidebarLinkR>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/' onClick={modalToggle}>Newsletter</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
