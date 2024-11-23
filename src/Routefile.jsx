import React from 'react'
import Create from './Create'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Update from './Update'
import Student from './Student'
import Home from './Home'
import Contect from './Contect'

const Routefile = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/Student' element={<Student />}></Route>
          <Route path='/Contect' element={<Contect/>}></Route>
          <Route path='/Create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Routefile