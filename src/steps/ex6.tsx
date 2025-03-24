import { createRoot } from 'react-dom/client'

const CustomInput = ({ name, type = 'text' }) => <input placeholder='à remplir...' id={name} type={type} />

const Field = ({ name, label, type }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <CustomInput name={name} type={type}/>
  </div>
)

createRoot(document.getElementById('root')!).render(
  <div>
    <form>
      <Field name="email" label="Email" />
      <Field name="password" label="Mot de passe" type="password"/>
      <button>
      Se connecter
      </button>
    </form>
  </div>,
)

