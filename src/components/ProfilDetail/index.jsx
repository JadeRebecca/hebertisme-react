import React from 'react'
import PersonnalInfo from './PersonnalInfo'
import AccountInfo from './AccountInfo'
import { ProfilContainer } from './ProfilElements'

const index = ({ view, user }) => {
  return (
    <ProfilContainer>
      <PersonnalInfo view={view} user={user} />
      <AccountInfo user={user} />
    </ProfilContainer>
  )
}

export default index
