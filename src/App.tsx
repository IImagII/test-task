import React from 'react'

import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { OnePost } from './pages/OnePost'
import { NotFound } from './pages/NotFound'

function App() {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/posts/:id' element={<OnePost />} />
         <Route path='*' element={<NotFound />} />
      </Routes>
   )
}

export default App
