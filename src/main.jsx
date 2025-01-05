import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './Header.jsx'
import Facts from './Facts.jsx'
import Footer from './Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Facts />
    <Footer />
  </StrictMode>,
)
