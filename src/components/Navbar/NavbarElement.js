import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: ${({ theme }) => theme.mainBackground};
  height: 120px;
  //   margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 10px 30px -10px ${({ theme }) => theme.shadow};
}

  // @media screen and (max-width: 960px) {
  //   transition: all 0.8s ease-in-out;
  // }
`

export const NavbarContainer = styled.div`
  background: ${({ theme }) => theme.mainBackground};
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  // max-width: 1100px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding: 0 6px;
  }
`

export const NavLogoLink = styled(Link)`
  color: ${({ theme }) => theme.main};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const NavLogo = styled.img`
  height: 150%;
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    color: ${({ theme }) => theme.main};
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-item: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`
export const NavItem = styled.li`
  height: 80px;

  &.view {
    padding: 10px;
  }
`
export const NavLink = styled(Link).attrs((props) => ({
  className: props.className,
}))`
  color: ${({ theme }) => theme.main};

  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;
  font-weight: 500;

  &.active {
    padding-bottom: 0px;
    border-bottom: 4px solid ${({ theme }) => theme.main};
    transition: 0.3s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.mainBackground};
    background: ${({ theme }) => theme.secondary};
    transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`
export const NavIcon = styled.div`
  color: ${({ theme }) => theme.main};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`

export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 4px;
  height: 100%;
  cursor: pointer;
  padding-bottom: 4px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.l}px) {
    padding-left: 0.4rem;
    padding-right: 0.4rem;
  }
`

export const View = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    display: none;
  }
`

export const ViewBtn = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.main};
  border: 1.4px solid ${({ theme }) => theme.main};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  // white-space: nowrap;
  padding: 10px 8px;
  font-size: 16px;
  outline: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  line-height: 1;

  &:hover {
    color: ${({ theme }) => theme.mainBackground};
    background: ${({ theme }) => theme.main};
    transition: 0.2s ease-in-out;
  }
`
