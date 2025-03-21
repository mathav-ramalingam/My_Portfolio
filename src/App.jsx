import React from 'react'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Certifications } from './Components/Certifications.jsx'
import { Project } from './Components/Project'
import { Contact } from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/project' element={<Project />} />
      <Route path='/certification' element={<Certifications />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    <Footer />
    </BrowserRouter>

    </>
  )
}

export default App
