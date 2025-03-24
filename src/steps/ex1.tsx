import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <div>
    <form>
      <div>
        <label>Email</label>
        <input placeholder='à remplir...'/>
      </div>
      <div>
        <label>Mot de passe</label>
        <input placeholder='à remplir...'/>
      </div>
      <button>
      Se connecter
      </button>
    </form>
  </div>,
)
