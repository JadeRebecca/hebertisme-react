import NewResultForm from '../../components/Forms/NewResultForm'
import Button from '../../components/Button'

function NewResult() {
  return (
    <div>
      <h1>Saisie d'un nouveau résultat</h1>
      <form>
        <NewResultForm />
        <Button text="Enregistrer" />
      </form>
    </div>
  )
}

export default NewResult
