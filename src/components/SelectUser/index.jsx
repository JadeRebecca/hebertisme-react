import React from 'react'

const SelectUser = ({ userTypeHandler }) => {
  const chooseMyself = () => {
    console.log('pour moi !')
    userTypeHandler(2)
  }
  const chooseStudent = () => {
    userTypeHandler(1)
  }
  return (
    <div>
      Je souhaite entrer un nouveau résultat pour :
      <button onClick={chooseMyself}>Moi-même</button> ou
      <button onClick={chooseStudent}>Un de mes élèves</button>
    </div>
  )
}

export default SelectUser
