import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {

  const location = useLocation();
   const isHomePage = location.pathname === '/Home';
  return (
    <div className='Nav'>
        <div className='InnerNav'>
      <div className='Nleft'>
       <button><Link to={"/Home"} className='link'>Property</Link></button> 
      </div>
      <div className='Nright'>
       {!isHomePage&& <button><Link to={"/Login"} className='link'>Login</Link></button>}
       {!isHomePage &&<button><Link to={"/Signup"} className='link'>Signup</Link></button>}
      </div>
      {isHomePage&& <div className='NrightMain'>
     <button><Link to={"/"} className='link'>Buy Property</Link></button>
      <button><Link to={"/"} className='link'>Sale Property</Link></button>
      </div>}
      </div>
    </div>
  )
}

export default NavBar
