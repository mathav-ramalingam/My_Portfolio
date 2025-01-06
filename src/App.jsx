import React from 'react'
import { Navbar } from './Components/Navbar'
import { Home } from './Components/Home'
import { About } from './Components/About'
import { Skills } from './Components/Skills'
import { Certifications } from './Components/Certifications'
import { Project } from './Components/Project'
import { Contact } from './Components/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Skills' element={<Skills />} />
      <Route path='/Certifications' element={<Certifications />} />
      <Route path='/Project' element={<Project />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
