import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Headers from './header.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers />
  </StrictMode>,
)
