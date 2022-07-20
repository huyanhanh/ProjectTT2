import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import Error from '../pages/Error'

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/catalog/:slug' element={<Product/>}/>
      <Route path='/catalog' element={<Catalog/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='*' element={<Error/>} />
    </Routes>
  )
}

export default Routing