import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export const ContentContainer = styled.div`
  width: 70%;
  margin: auto;
  margin-top: 80px;
  padding-bottom: 40px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 80%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    width: 92%;
  }
`
