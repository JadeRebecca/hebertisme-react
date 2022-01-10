import styled from 'styled-components'

export const Btn = styled.button`
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
