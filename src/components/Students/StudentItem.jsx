import React from 'react'
import { StudentsContainer, StudentsList } from './StudentsElements'

const StudentItem = ({ student, index, onClickHandler }) => {
    const selectStudent = () => {
        onClickHandler({id: student.id, firstName: student.firstName, lastName: student.lastName, age : 16})
    }
  return (
    <li key={index} onClick={selectStudent}>
    {student.lastName.toUpperCase()} {student.firstName}
    </li>
  )
}

export default StudentItem
