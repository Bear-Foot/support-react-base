import { createRoot } from 'react-dom/client'

import { App } from './App'
import { server } from './mocks/node'
 
server.listen()
createRoot(document.getElementById('root')!).render(
  <App />,
)

