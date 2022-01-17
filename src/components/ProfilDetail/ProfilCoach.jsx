import React from 'react'
import { ProfilTable } from './ProfilElements'

const ProfilCoach = ({ user }) => {
  return (
    <ProfilTable>
      <tbody>
        <tr>
          <td>Nom : </td>
          <td>{user.nom}</td>
        </tr>
        <tr>
          <td>Prénom : </td>
          <td>{user.prenom}</td>
        </tr>
        <tr>
          <td>Structure de rattachement : </td>
          <td>{user.structure}</td>
        </tr>
        <tr>
          <td>Rôle : </td>
          <td>{user.userType}</td>
        </tr>
        <tr>
          <td>Langue : </td>
          <td>{user.language}</td>
        </tr>
      </tbody>
    </ProfilTable>
  )
}

export default ProfilCoach
