import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/home/Home'
import Login from './components/Login'
import Signin from './components/Signin'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App