import { useParams } from 'react-router-dom'
import { HistoryData } from '../../pages/History/Data'
import { MdOutlinePictureAsPdf } from 'react-icons/md'
import {
  DetailContainer,
  HistoryHeader,
  HistoryBtn,
  ResultTable,
  ResultTr,
} from './HistoryElements'

function HistoryDetail() {
  const { id } = useParams()
  const data = HistoryData.find(
    (item) => parseInt(item.id, 10) === parseInt(id, 10)
  )

  return (
    <DetailContainer>
      <h1>Détail de la fiche n°{id}</h1>

      <HistoryHeader>
        <div>
          <p>Date : {data.date}</p>
          <p>Age : {data.age} ans</p>
          <p>Lieu : {data.lieu}</p>
        </div>
        <HistoryBtn>
          <MdOutlinePictureAsPdf size={50} />
        </HistoryBtn>
      </HistoryHeader>

      <ResultTable>
        <thead>
          <ResultTr>
            <th>Epreuve</th>
            <th>Perf</th>
            <th>Points</th>
          </ResultTr>
        </thead>
        <tbody>
          {data.exercices.map((item, index) => (
            <tr key={index}>
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

            <td colSpan="2">{data.aptitude}</td>
          </tr>
        </tbody>
      </ResultTable>
    </DetailContainer>
  )
}

export default HistoryDetail
