import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 80px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    width: 92%;
  }
`
