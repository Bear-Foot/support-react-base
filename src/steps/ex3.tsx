import { createRoot } from 'react-dom/client'

const CustomInput = (props) => <input placeholder='à remplir...' id={props.name} />

createRoot(document.getElementById('root')!).render(
  <div>
    <form>
      <div>
        <label htmlFor='email'>Email</label>
        <CustomInput name='email'/>
      </div>
      <div>
        <label htmlFor='password'>Mot de passe</label>
        <CustomInput name='password'/>
      </div>
      <button>
      Se connecter
      </button>
    </form>
  </div>,
)

