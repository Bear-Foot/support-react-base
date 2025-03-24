import { createRoot } from 'react-dom/client'

const CustomInput = ({ name }) => <input placeholder='à remplir...' id={name} />

const Field = ({ name, label }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <CustomInput name={name} />
  </div>
)

createRoot(document.getElementById('root')!).render(
  <div>
    <form>
      <Field name="email" label="Email"/>
      <Field name="password" label="Mot de passe"/>
      <button>
      Se connecter
      </button>
    </form>
  </div>,
)

