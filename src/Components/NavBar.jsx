import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='Nav'>
        <div className='InnerNav'>
      <div className='Nleft'>
       <button><Link to={"/"} className='link'>Property</Link></button> 
      </div>
      <div className='Nright'>
        <button><Link to={"/Login"} className='link'>Login</Link></button>
        <button><Link to={"/Signup"} className='link'>Signup</Link></button>
      </div>
      </div>
    </div>
  )
}

export default NavBar
