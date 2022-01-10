import React from 'react'
import { Btn } from './ButtonElement'

const Button = ({ text }) => {
  console.log(text)
  return <Btn>{text}</Btn>
}

export default Button
