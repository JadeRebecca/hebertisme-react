import React from 'react'
import Button from '../Button'
import { Separator, ButtonWrapper } from './SelectUserElements'

const SelectUser = ({ userTypeHandler }) => {
  const chooseMyself = () => {
    userTypeHandler(2)
  }
  const chooseStudent = () => {
    userTypeHandler(1)
  }
  return (
    <div>
      <p>Je souhaite entrer un nouveau résultat pour :</p>
      <ButtonWrapper>
      <Button text='Moi-même' onClick={chooseMyself}/>
      <Separator>ou</Separator>
      <Button text='Un de mes élèves' onClick={chooseStudent}/>
      </ButtonWrapper>
    </div>
  )
}

export default SelectUser
