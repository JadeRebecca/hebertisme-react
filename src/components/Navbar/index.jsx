import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'

import {
  Nav,
  NavLogoLink,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  View,
  ViewBtn,
} from './NavbarElement'
import logo from '../../images/logo/logo.png'

const Navbar = ({ toggle, theme, view, changeView }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  const handleView = () => {
    const newView = view === 1 ? 2 : 1
    changeView(newView)
  }
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogoLink to="/" onClick={toggleHome}>
            <NavLogo src={logo} alt="logo" />
          </NavLogoLink>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/new">Nouveau résultat</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/history">Historique</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/profil">Mon profil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/logout">
                <MdLogout size={30} />
              </NavLink>
            </NavItem>
          </NavMenu>
          <View>
            <ViewBtn onClick={handleView}>
              {view === 1 ? 'Voir la vue coach' : 'Voir la vue adhérent'}
            </ViewBtn>
          </View>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
