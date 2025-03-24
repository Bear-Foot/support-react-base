import { createRoot } from 'react-dom/client'

const CustomInput = (props) => <input placeholder='à remplir...' id={props.name} />

const Field = (props) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <CustomInput name={props.name} type={props.type} />
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
