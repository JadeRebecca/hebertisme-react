import { profilData } from './Data'

function Profil() {
  return (
    <div>
      <h1>Mon profil utilisateur</h1>
      <table>
        <tbody>
          <tr>
            <td>Nom : </td>
            <td>{profilData.nom}</td>
          </tr>
          <tr>
            <td>Prénom : </td>
            <td>{profilData.prenom}</td>
          </tr>
          <tr>
            <td>Genre : </td>
            <td>{profilData.genre}</td>
          </tr>
          <tr>
            <td>Structure d'accueil : </td>
            <td>{profilData.structure}</td>
          </tr>
          <tr>
            <td>Type : </td>
            <td>{profilData.statut}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Profil
