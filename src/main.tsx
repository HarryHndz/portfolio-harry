import { lazy, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './index.css'

const App = lazy(() => import('./App.tsx'))

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<div>Cargando...</div>}>
      <App />
    </Suspense>
  </StrictMode>,
)
