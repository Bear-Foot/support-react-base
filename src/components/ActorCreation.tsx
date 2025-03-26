import { Field, Form } from "react-final-form"
import { useMutation } from "react-query"

import { sleep } from "../requests"

import { CustomField } from "./Field"

const isRequired = (values, errors, name) => {
  if (!values[name]) {
    errors[name] = 'Ce champ est requis'
  }
}

const hasFormat = (values, errors, name, format, errorMessage) => {
  if (!values[name]?.match(format)) {
    errors[name] = errorMessage
  }
}

const validate = values => {
  const errors = {}

  isRequired(values, errors, 'firstName')
  isRequired(values, errors, 'lastName')
  isRequired(values, errors, 'birthDate')
  isRequired(values, errors, 'country')

  hasFormat(values, errors, 'birthDate', /^[0-9]{4}-[0-9]{1,2}-[0-9]{1,2}$/, 'Doit ressembler à une date')

  return errors
}

export const ActorCreation = () => {
  const createActorMutation = useMutation({
    mutationFn: async (values) => {
      await sleep(1000)
      console.log(values)

      return Promise.resolve()
    },
  })
  
  return <Form
    onSubmit={createActorMutation.mutate}
    validate={validate}
    render={({ handleSubmit, values }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div>
            <Field name="firstName" component={CustomField} label="Prénom" />
          </div>
          <div>
            <Field name="lastName" component={CustomField}  label="Nom"/>
          </div>
          <div>
            <Field name="birthDate" component={CustomField} label="Date de naissance" type="date"/>
          </div>

          <div>
            <Field name="country" component={CustomField} label="Pays"/>
          </div>

          {values.country === 'France' && <div>
            <Field name="phone" component={CustomField} label="Téléphone" type="tel" />
          </div>}
          <button type="submit">Créer</button>
          {createActorMutation.isLoading && 'Chargement...'}
        </form>
      )}}
  />
}
