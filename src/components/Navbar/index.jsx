import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { useContext } from 'react'
import { ViewContext } from '../../utils/context'
import { FaBars } from 'react-icons/fa'
import { MdLogout } from 'react-icons/md'
import Language from '../Language'

import {
  Nav,
  NavLogoLink,
  NavLogo,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavIcon,
  FlagContainer,
  View,
  ViewBtn,
} from './NavbarElement'
import logo from '../../images/logo/logo.png'

const Navbar = ({ toggle, theme }) => {
  const { view, changeView } = useContext(ViewContext)

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
              <NavIcon>
                <MdLogout size={30} />
              </NavIcon>
            </NavItem>

            <NavItem>
              <FlagContainer>
                <Language />
              </FlagContainer>
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
