import NewResultForm from '../../components/Forms/NewResultForm'

function NewResult() {
  return (
    <div>
      <h1>Nouveau résultat</h1>
      <form>
        <NewResultForm />
        <input type="submit" value="Enregistrer" />
      </form>
    </div>
  )
}

export default NewResult
