import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/CSS/index.css'
import App from './App.jsx'
import React from 'react'
import { ThemeProvider } from "../src/Components/ThemeContext.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
