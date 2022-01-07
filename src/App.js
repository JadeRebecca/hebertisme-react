import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/Globalstyle'
import { basisTheme } from './components/Themes'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import History from './pages/History'
import HistoryDetail from './pages/History/Detail'
import Exercice from './pages/Exercice'
import Profil from './pages/Profil'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <ThemeProvider theme={basisTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} theme={basisTheme} />
          <Layout>
            <Routes>
              <Route path="/" element={<Home theme={basisTheme} />} />
              <Route path="/history" element={<History theme={basisTheme} />} />
              <Route
                path="/history/:id"
                element={<HistoryDetail theme={basisTheme} />}
              />
              <Route
                path="/exercice"
                element={<Exercice theme={basisTheme} />}
              />
              <Route path="/profil" element={<Profil theme={basisTheme} />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>
          {/* <Footer /> */}
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
