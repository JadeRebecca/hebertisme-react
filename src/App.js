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
import NewResult from './pages/NewResult'
import Profil from './pages/Profil'
import Error from './components/Error'
import Footer from './components/Footer'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [view, setView] = useState(1)

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const changeView = (newView) => {
    setView(newView)
    console.log(view)
  }
  return (
    <ThemeProvider theme={basisTheme}>
      <>
        <GlobalStyles />
        <Router>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar
            toggle={toggle}
            view={view}
            changeView={changeView}
            theme={basisTheme}
          />
          <Layout>
            <Routes>
              <Route
                path="/"
                element={<Home view={view} theme={basisTheme} />}
              />
              <Route path="/history" element={<History theme={basisTheme} />} />
              <Route
                path="/history/:id"
                element={<HistoryDetail theme={basisTheme} />}
              />
              <Route path="/new" element={<NewResult theme={basisTheme} />} />
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
