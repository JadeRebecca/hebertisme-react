import styled from 'styled-components'

export const ProfilContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.s}px) {
    gap: 0px;
  }
`

export const ProfilItemContainer = styled.div`
  width: 45%;

  @media screen and (max-width: ${({ theme }) => theme.breakpoint.m}px) {
    width: 100%;
    column-gap: 40px;
    &:nth-child(2) /* On prend le deuxième bloc élément */ {
      margin-top: 30px;
    }
  }
`

export const ProfilTable = styled.table`
  margin-top: 8px;
  border-collapse: collapse;
  border: none;
  width: 100%;

  & > tbody > tr > td {
    padding: 4px;
  }
  & > thead > tr > th {
    padding: 4px;
  }
`

export const AccountTable = styled.table`
  margin-top: 8px;
  border-collapse: collapse;
  border: none;
  width: 100%;

  & > tbody > tr > td {
    padding: 4px;
  }
  & > thead > tr > th {
    padding: 4px;
  }
`
