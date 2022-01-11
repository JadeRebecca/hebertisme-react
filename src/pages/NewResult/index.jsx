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
  const [userName, setUserName] = useState('')
  const [idUser, setIdUser] = useState()
  const [showStudentList, setShowStudentList] = useState(false)
  const [students, setStudents] = useState([])

  useEffect(() => {
    if (view === 1) setIdUser(1)
    else setIdUser()
  }, [view])

  const userTypeHandler = (userType) => {
    if (userType === 2) setIdUser(2)
    if (userType === 1) setShowStudentList(true)
  }

  const chooseStudent = () => {
    setIdUser(1)
    setUserName('Paul Martin')
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
      <h1>Saisie d'un nouveau résultat {userName}</h1>
      {view === 2 && !showStudentList && !idUser && (
        <SelectUser userTypeHandler={userTypeHandler} />
      )}
      {view === 2 && showStudentList && !idUser && students.length > 0 && (
        <StudentList data={students} onClickHandler={chooseStudent} />
      )}
      {idUser && (
        <form>
          <NewResultForm />
          <Button text="Enregistrer" />
        </form>
      )}
    </div>
  )
}

export default NewResult
