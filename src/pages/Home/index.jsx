import React, { useState } from 'react'
import { profilData } from '../Profil/Data'

function Home({ view }) {
  const user = view === 1 ? profilData[0] : profilData[1]
  const userName = `${user.prenom} ${user.nom}`

  return (
    <div>
      <h1> Bonjour {userName} !</h1>
      <p>
        Tableau de bord : dernières activités / résultats enregistrées,
        statistiques ... graphique étoile - meilleure note attribuée ?
      </p>
    </div>
  )
}

export default Home
