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
} from './NavbarElement'
import logo from '../../images/logo/logo.png'

const Navbar = ({ toggle, theme }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
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
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar
