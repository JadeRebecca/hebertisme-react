import { useParams } from 'react-router-dom'
import { HistoryData } from './Data'

function HistoryDetail() {
  const { id } = useParams()
  const data = HistoryData.find(
    (item) => parseInt(item.id, 10) === parseInt(id, 10)
  )

  return (
    <div>
      <h1>Détail de la fiche</h1>
      <h2>Numéro {id}</h2>
      <p>Date : {data.date}</p>
      <p>Age : {data.age} ans</p>
      <p>Lieu : {data.lieu}</p>
      <table>
        <thead>
          <tr>
            <th>Epreuve</th>
            <th>Perf</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.exercices.map((item) => (
            <tr>
              <td>{item.nom_exercice}</td>
              <td>{item.perf}</td>
              <td>{item.points}</td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td>{data.total}</td>
          </tr>
          <tr>
            <td>Moyenne</td>
            <td></td>
            <td>{data.moyenne}</td>
          </tr>
          <tr>
            <td>Degré d'aptitude</td>

            <td colspan="2">{data.aptitude}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HistoryDetail
