import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Headers from './header.jsx'
import About from './about.jsx'
import Projects from './projet.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers />
    <About />
    <Projects />
  </StrictMode>,
)
