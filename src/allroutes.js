import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Develop from './pages/Develop/develop'
import Home from './pages/Home/Home'
import Market from './pages/Market/Market'
import Recruit from './pages/Recruit/Recruit'
import Resources from './pages/Resources/Resources'
import Signup from './pages/Signup/Signup'

function Allroutes() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/market' element={<Market/>}></Route>
    <Route path='/recruit' element={<Recruit/>}></Route>
    <Route path='/develop' element={<Develop/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/resources' element={<Resources/>}></Route>
   </Routes>
  )
}

export default Allroutes