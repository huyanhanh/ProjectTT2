import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import Routing from '../routes/Routing'

const Layout = () => {
  return (
    <Routes>
      <Route path='*' element={(
        <div>
          <Header />
          <div className="container">
            <div className="main">
              <Routing />
            </div>
          </div>
          <Footer />
        </div>
      )}
      />
    </Routes>
  )
}

export default Layout