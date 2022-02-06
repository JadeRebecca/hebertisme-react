import React, { useState, useContext } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './components/Globalstyle'
import { basisTheme } from './components/Themes'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ViewProvider } from './utils/context'
import AuthContext from './store/auth-context'
import PageLayout from './components/Layout'
import ContentLayout from './components/Layout/ContentLayout'
import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Home from './pages/Home'
import Code from './pages/Code'
import History from './pages/History'
import HistoryDetail from './pages/History/Detail'
import NewResult from './pages/NewResult'
import Profil from './pages/Profil'
import Error from './components/Error'
import Footer from './components/Layout/Footer'
import AuthPage from './pages/Authentication'

function App() {
  const authCtx = useContext(AuthContext)
  console.log(authCtx.isLoggedIn)

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
              {authCtx.isLoggedIn && (
                <Navbar toggle={toggle} theme={basisTheme} />
              )}
              <ContentLayout>
                <Routes>
                  <Route
                    path="/"
                    element={
                      authCtx.isLoggedIn ? (
                        <Home theme={basisTheme} />
                      ) : (
                        <AuthPage />
                      )
                    }
                  />
                  {authCtx.isLoggedIn && (
                    <Route path="/home" element={<Home theme={basisTheme} />} />
                  )}
                  <Route
                    path="/auth"
                    element={<AuthPage theme={basisTheme} />}
                  />
                  {authCtx.isLoggedIn && (
                    <Route path="/code" element={<Code theme={basisTheme} />} />
                  )}
                  {authCtx.isLoggedIn && (
                    <Route
                      path="/history"
                      element={<History theme={basisTheme} />}
                    />
                  )}
                  {authCtx.isLoggedIn && (
                    <Route
                      path="/history/:id"
                      element={<HistoryDetail theme={basisTheme} />}
                    />
                  )}
                  {authCtx.isLoggedIn && (
                    <Route
                      path="/new"
                      element={<NewResult theme={basisTheme} />}
                    />
                  )}
                  {authCtx.isLoggedIn && (
                    <Route
                      path="/profil"
                      element={<Profil theme={basisTheme} />}
                    />
                  )}
                  <Route
                    path="*"
                    element={authCtx.isLoggedIn ? <Error /> : <AuthPage />}
                  />
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
