import styled from 'styled-components'

export const HistoryContainer = styled.div``

export const DetailContainer = styled.div`
  width: 400px;
`
export const HistoryHeader = styled.div`
  background: ${({ theme }) => theme.warning};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-top-left-radius: ${({ theme }) => theme.borderRadius}px;
  border-top-right-radius: ${({ theme }) => theme.borderRadius}px;
  font-size: 18px;
`

export const HistoryBtn = styled.button`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.main};
  border: 1.4px solid ${({ theme }) => theme.main};
  border-radius: ${({ theme }) => theme.borderRadius}px;
  // white-space: nowrap;
  padding: 4px;
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

export const ResultTable = styled.table`
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;

  & > tbody > tr > td {
    padding: 4px;
    border: 1px solid black;
  }
  & > thead > tr > th {
    border: 1px solid black;
    padding: 4px;
  }
`

export const ResultTr = styled.tr`
  font-weight: bold;
  // & > th {
  //   padding: 4px;
  // }
`
