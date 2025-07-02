import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Headers from './component/header.jsx'
import About from './component/about.jsx'
import Projects from './component/projet.jsx'
import Contact from './component/contact.jsx'
import Footer from './component/footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Headers />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </StrictMode>,
)
