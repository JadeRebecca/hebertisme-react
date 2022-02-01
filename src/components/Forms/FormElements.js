import React from 'react'
import styled from 'styled-components'

export const FormGroup = styled.div`
  display: block;
  //width: 70%;
  //   margin: 50px auto;
`

export const FormGroupContainer = styled.div`
  display: flex;
  gap: 10px;
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
