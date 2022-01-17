import React, { useState, useContext, useEffect } from 'react'
import { ViewContext } from '../../utils/context'
import SelectUser from '../../components/SelectUser'
import NewResultForm from '../../components/Forms/NewResultForm'
import Button from '../../components/Button'
import StudentList from '../../components/Students'

const url = `https://dummyapi.io/data/v1/user`

let headers = new Headers()
headers.append('app-id', '61dbdf616cfffb2e6599f53a')
const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' }

function NewResult() {
  const { view } = useContext(ViewContext)
  const [selectedUser, setSelectedUser] = useState({id:0, firstName: '', lastName :'', age : 0})
  const [showStudentList, setShowStudentList] = useState(false)
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (view === 1) setSelectedUser({id: 1, firstName: 'Paul', lastName : 'Martin', age : 16})
    else setSelectedUser({id:0, firstName: '', lastName : '', age : ''})
  }, [view])

  const userTypeHandler = (userType) => {
    if (userType === 2) setSelectedUser({id: 2, firstName: 'Coach', lastName : 'Carter', age : 32})
    if (userType === 1) setShowStudentList(true)
  }

  const chooseStudent = (student) => {
    setSelectedUser(student)
  }

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const res = await fetch(url, init)
        const { data } = await res.json()
        setStudents(data)
      } catch (e) {
        console.log(e)
      } finally {
      }
    }
    fetchStudent()
  }, [])

  return (
    <div>
      <h1>Saisie d'un nouveau résultat</h1>
      {view === 2 && !showStudentList && selectedUser.id === 0 && (
        <SelectUser userTypeHandler={userTypeHandler} />
      )}
      {view === 2 && showStudentList && selectedUser.id === 0 && students.length > 0 && (
        <StudentList data={students} onClickHandler={chooseStudent} />
      )}
      {selectedUser.id !==0 && (
        <form>
          <NewResultForm user={selectedUser}/>
          <Button text="Enregistrer" />
        </form>
      )}
    </div>
  )
}

export default NewResult
