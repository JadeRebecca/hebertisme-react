import ProfilEleve from './ProfilEleve'
import ProfilCoach from './ProfilCoach'
import { ProfilItemContainer } from './ProfilElements'

function ProfilDetail({ user, view }) {
  return (
    <ProfilItemContainer>
      <h2>Mon informations personnelles</h2>
      {view === 1 ? <ProfilEleve user={user} /> : <ProfilCoach user={user} />}
    </ProfilItemContainer>
  )
}

export default ProfilDetail
