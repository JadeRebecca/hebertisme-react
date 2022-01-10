import React, { useContext } from 'react'
import { ViewContext } from '../../utils/context'
import { profilData } from './Data'
import ProfilDetail from '../../components/ProfilDetail'

function PersonnalInfo() {
  const { view } = useContext(ViewContext)
  const user = view === 1 ? profilData[0] : profilData[1]

  return (
    <div>
      <h1>Mon profil</h1>
      <ProfilDetail view={view} user={user} />
    </div>
  )
}

export default PersonnalInfo
