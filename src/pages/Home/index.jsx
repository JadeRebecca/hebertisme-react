import React, { useContext } from 'react'
import { ViewContext } from '../../utils/context'
import { profilData } from '../Profil/Data'

function Home() {
  const { view } = useContext(ViewContext)
  const user = view === 1 ? profilData[0] : profilData[1]
  const userName = `${user.prenom} ${user.nom}`

  return (
    <div>
      <h1> Bonjour {userName} !</h1>
      <p>
        Tableau de bord : dernières activités / résultats enregistrées,
        statistiques de mes élèves...
      </p>
    </div>
  )
}

export default Home
