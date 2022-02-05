import React from 'react'
import { ProfilTable } from './ProfilElements'

const ProfilEleve = ({ user }) => {
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
          <td>Date de naissance : </td>
          <td>{user.date_nai}</td>
        </tr>
        <tr>
          <td>Age : </td>
          <td>{user.age}</td>
        </tr>
        <tr>
          <td>Genre : </td>
          <td>{user.genre}</td>
        </tr>
        <tr>
          <td>Structure d'accueil : </td>
          <td>{user.structure}</td>
        </tr>
        <tr>
          <td>Coach : </td>
          <td>{user.coach}</td>
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

export default ProfilEleve
