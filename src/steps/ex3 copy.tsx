import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <div>
    <Title>Hello</Title>
    <Title>World</Title>
  </div>,
)
