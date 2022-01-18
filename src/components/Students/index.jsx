import React from 'react'
import StudentsList from './StudentsList'
import { StudentsContainer } from './StudentsElements'

const Students = ({ data, onClickHandler }) => {
  return (
    <StudentsContainer>
      <p>Choisir un élève :</p>
      <StudentsList data={data} onClickHandler={onClickHandler}/>
    </StudentsContainer>
  )
}

export default Students
