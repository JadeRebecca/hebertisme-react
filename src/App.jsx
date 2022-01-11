import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/Globalstyle'
import { basisTheme } from './components/Themes'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ViewProvider } from './utils/context'
import PageLayout from './components/Layout'
import ContentLayout from './components/Layout/ContentLayout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import Code from './pages/Code'
import History from './pages/History'
import HistoryDetail from './pages/History/Detail'
import NewResult from './pages/NewResult'
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
          <ViewProvider>
            <PageLayout>
              <Sidebar isOpen={isOpen} toggle={toggle} />
              <Navbar toggle={toggle} theme={basisTheme} />
              <ContentLayout>
                <Routes>
                  <Route path="/" element={<Home theme={basisTheme} />} />
                  <Route path="/code" element={<Code theme={basisTheme} />} />
                  <Route
                    path="/history"
                    element={<History theme={basisTheme} />}
                  />
                  <Route
                    path="/history/:id"
                    element={<HistoryDetail theme={basisTheme} />}
                  />
                  <Route
                    path="/new"
                    element={<NewResult theme={basisTheme} />}
                  />
                  <Route
                    path="/profil"
                    element={<Profil theme={basisTheme} />}
                  />
                  <Route path="*" element={<Error />} />
                </Routes>
              </ContentLayout>
              <Footer />
            </PageLayout>
          </ViewProvider>
        </Router>
      </>
    </ThemeProvider>
  )
}

export default App
