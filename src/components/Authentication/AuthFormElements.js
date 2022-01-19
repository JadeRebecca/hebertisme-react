import styled from 'styled-components'

export const FormWrapper = styled.div`
  margin: 3rem auto;
  width: 95%;
  max-width: 25rem;
  border-radius: 6px;
  background-color: background: ${({ theme }) => theme.background};
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  text-align: center;
`
export const Title = styled.h1`
  font-size: 25px;
`
export const FormItemContainer = styled.div`
  margin-bottom: 2rem;

  & > label {
    text-align: left;
    display: block;
    color: ${({ theme }) => theme.text};
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & > input {
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
`

export const FormAction = styled.div`
   {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`

export const LogoContainer = styled.div`
  text-align: center;
`
export const Logo = styled.img`
  width: 100%;
`
