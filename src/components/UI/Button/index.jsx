import React from 'react'
import { Btn } from './ButtonElement'

const Button = (props)  => {
  var { text, ...other } = props;

  return (
    <Btn {...other}>
        {text}
    </Btn>
  );
}

export default Button
