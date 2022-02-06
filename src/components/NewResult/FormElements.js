import styled from 'styled-components'

export const H3 = styled.h3`
  text-align: center;
  margin-bottom: 14px;
  color: ${({ theme }) => theme.primary};
`

export const FormGroup = styled.div`
  display: block;
  //width: 70%;
  //   margin: 50px auto;
`

export const FormGroupContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Label = styled.label`
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.neutral}
  display: block;
`

export const Input = styled.input`
  padding: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-bottom: 0.5em;
`

export const InputGroup = styled.div`
  display: flex;
  gap: 5px;
  //   margin: 50px auto;
`

export const SelectGroup = styled.div`
  display: flex;
  gap: 5px;
  //   margin: 50px auto;
`
export const Select = styled.select`
  padding: 0.5em;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  margin-bottom: 0.5em;
`

export const Message = styled.label`
  margin-bottom: 0.5em;
  color: palevioletred;
  display: block;
`

export const ResultWrapper = styled.div`
  display: flex;
  gap: 50px;
  //   margin: 50px auto;
`

export const EpreuveContainer = styled.div`
  margin-bottom: 8px;
  margin-top: 8px;
`

export const ResultContainer = styled.div`
  border: 1px solid black;
  width: 50%;
  padding: 8px;
  margin-bottom: 10px;
  //   margin: 50px auto;
`
