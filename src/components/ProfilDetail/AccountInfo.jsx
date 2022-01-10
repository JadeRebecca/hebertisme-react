import { AccountTable } from './ProfilElements'
import { ProfilItemContainer } from './ProfilElements'
import Button from '../Button'

function AccountInfo({ user }) {
  return (
    <ProfilItemContainer>
      <h2>Mon compte utilisateur</h2>
      <AccountTable>
        <tbody>
          <tr>
            <td>Username :</td>
            <td>{user.username}</td>
          </tr>
          <tr>
            <td>Email :</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Mot de passe :</td>
            <td>****</td>
          </tr>
        </tbody>
      </AccountTable>
      <Button text="modifier les infos de mon compte" />
    </ProfilItemContainer>
  )
}

export default AccountInfo
