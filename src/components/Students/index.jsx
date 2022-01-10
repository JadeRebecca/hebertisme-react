import React from 'react'
import { StudentsContainer } from './StudentsElements'

const StudentList = ({ data }) => {
  return (
    <StudentsContainer>
      <h2>Liste de mes élèves</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.firstName}</li>
        ))}
      </ul>
    </StudentsContainer>
  )
}

export default StudentList
