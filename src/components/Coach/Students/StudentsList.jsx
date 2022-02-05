import React from 'react'
import StudentItem from './StudentItem'
import { StudentsListWrapper } from './StudentsElements'

const StudentList = ({ data, onClickHandler }) => {
  return (
      <StudentsListWrapper>
        {data.map((item, index) => (
          <StudentItem student={item} index={index} onClickHandler={onClickHandler}/>
        ))}
      </StudentsListWrapper>
  )
}

export default StudentList
