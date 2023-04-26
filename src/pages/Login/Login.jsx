import React from 'react'
import Navbar from './components/Navbar'
import "./css/style.css"
import DataLayout from './components/DataLayout'

const Login = () => {
  return (
    <div className="box-container-login">
      <Navbar/> 
      <DataLayout/>
    </div>
  )
}

export default Login