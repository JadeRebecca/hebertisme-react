import { Link } from 'react-router-dom'
import { HistoryData } from './Data'

function History() {
  return (
    <div>
      <h1>Historique</h1>
      <div>
        <ul>
          {HistoryData.map((item) => (
            <li key={item.id}>
              <Link to={`/history/${item.id}`}>Résultats du {item.date}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default History
