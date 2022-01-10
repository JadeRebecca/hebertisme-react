import React from 'react'
import { useParams } from 'react-router-dom'
import { HistoryData } from './Data'
import HistoryDetail from '../../components/History/HistoryDetail'

const Detail = () => {
  const { id } = useParams()
  const data = HistoryData.find(
    (item) => parseInt(item.id, 10) === parseInt(id, 10)
  )
  return <HistoryDetail data={data} />
}

export default Detail
