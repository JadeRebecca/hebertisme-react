import { useParams } from 'react-router-dom'

function HistoryDetail() {
  const { id } = useParams()

  return (
    <div>
      <h1>Détail de la fiche</h1>
      <h2>Numéro {id}</h2>
    </div>
  )
}

export default HistoryDetail
