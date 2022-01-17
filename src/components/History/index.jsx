import React from 'react'
import { Link } from 'react-router-dom'
import { HistoryContainer } from './HistoryElements'

const HistoryList = ({ data }) => {
  return (
    <HistoryContainer>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/history/${item.id}`}>Résultats du {item.date}</Link>
          </li>
        ))}
      </ul>
    </HistoryContainer>
  )
}

export default HistoryList
