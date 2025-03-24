import { createRoot } from 'react-dom/client'

const CustomInput = () => <input placeholder='à remplir...'/>

createRoot(document.getElementById('root')!).render(
  <div>
    <form>
      <div>
        <label>Email</label>
        <CustomInput />
      </div>
      <div>
        <label>Mot de passe</label>
        <CustomInput />
      </div>
      <button>
      Se connecter
      </button>
    </form>
  </div>,
)

