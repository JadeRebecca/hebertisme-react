import React from 'react'

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
} from './SidebarElements'

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="/code" onClick={toggle}>
            Code de la force
          </SidebarLink>
          <SidebarLink to="/new" onClick={toggle}>
            Nouveau résultat
          </SidebarLink>
          <SidebarLink to="/history" onClick={toggle}>
            Historique
          </SidebarLink>
          <SidebarLink to="/profil" onClick={toggle}>
            Mon profil
          </SidebarLink>
          <SidebarLink to="/logout" onClick={toggle}>
            Déconnexion
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
