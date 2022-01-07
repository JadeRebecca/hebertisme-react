import { Link } from 'react-router-dom'

function History() {
  return (
    <div>
      <h1>Historique</h1>
      <div>
        <ul>
          <li>
            <Link to="/history/1">Résultats 01/11/21</Link>
          </li>
          <li>
            <Link to="/history/2">Résultats 01/09/21</Link>
          </li>
          <li>
            <Link to="/history/3">Résultats 01/07/21</Link>
          </li>
          <li>
            <Link to="/history/4">Résultats 01/05/21</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default History
