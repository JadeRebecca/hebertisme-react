import React, { useState, useEffect, useContext } from 'react'
import { ViewContext } from '../../utils/context'
import { HistoryData } from './Data'
import HistoryList from '../../components/History'
import StudentList from '../../components/Students'

const url = `https://dummyapi.io/data/v1/user`

let headers = new Headers()
headers.append('app-id', '61dbdf616cfffb2e6599f53a')

const init = { method: 'GET', headers: headers, mode: 'cors', cache: 'default' }

function History() {
  const [students, setStudents] = useState([])

  //ancienne syntaxe
  // useEffect(() => {
  //   fetch(url, init).then((response) =>
  //     response
  //       .json()
  //       .then(({ data }) => {
  //         console.log(data)
  //         setStudents(data)
  //       })

  //       .catch((error) => console.log(error))
  //   )
  // }, [])

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

  const { view } = useContext(ViewContext)
  const title =
    view === 1
      ? 'Historique de mes résultats'
      : 'Historique des résultats de mes élèves'

  return (
    <div>
      <h1>{title}</h1>
      <HistoryList data={HistoryData} />
      {view === 2 && students.length > 0 && <StudentList data={students} />}
    </div>
  )
}

export default History
