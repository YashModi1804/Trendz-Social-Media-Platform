import React from 'react'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Login from './Login.js'
import Home from './Home.js'

export default function App(){
  return(
    <>
    
    <Router>
      <Routes> 
        <Route path="/" element={<Login />} /> 
        <Route path="/home" element={<Home />} />
       
      </Routes>
    </Router>
    
    </>
  )
}