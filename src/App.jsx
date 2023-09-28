import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { AboutUs } from './pages/AboutUs'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'
import { store } from './store/store'
// import { AppFooter } from './cmps/AppFooter'
import { ToyIndex } from './pages/ToyIndex'
import { ToyDetails } from './pages/ToyDetails'
import { ToyEdit } from './pages/ToyEdit'
import { DashBorad } from './pages/DashBorad'

// import './assets/style/main.css'
import './assets/style/main.scss'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


export function App() {

  return (
      <Provider store={store}>
          <Router>
              <section className="main-layout app">
                  <AppHeader />
                  <main className='main-home-page'>
                      <Routes>
                          <Route element={<HomePage />} path="/" />
                          <Route element={<AboutUs />} path="/about" />
                          <Route element={<ToyIndex />} path="/toy" />
                          <Route element={<ToyDetails />} path="/toy/:toyId" />
                          <Route element={<ToyEdit />} path="/toy/edit/:toyId" />
                          <Route element={<DashBorad />} path="/dash" />
                      </Routes>
                  </main>
                  {/* <AppFooter /> */}
              </section>
          </Router>
    </Provider>
  )
}
