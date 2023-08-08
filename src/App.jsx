import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import SignUp from './components/Signup'
import SignIn from './components/SignIn'
import Home from './components/HomePage'
import NavBar from './components/NavBar'

//import './App.css'

const App=()=> {
  

  return (
    <>
      
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
