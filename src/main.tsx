import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QueryProviders from './QueryProviders.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProviders>
      <App />
    </QueryProviders>
  </StrictMode>,
)
