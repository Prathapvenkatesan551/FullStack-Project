import React from 'react'
import { Link ,useLocation} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {

    const location = useLocation();
   const isHomePage = location.pathname === '/Home';
   const isLoginPage = location.pathname === '/Login';
   const isSignupPage = location.pathname === '/Signup';
   const isLorSPage = location.pathname === '/Login' || location.pathname === '/Signup'|| location.pathname === '/'?true:false;

  return (
    <div className='Nav'>
        <div className='InnerNav'>
      <div className='Nleft'>
       <button><Link to={"/Home"} className='link'>Property</Link></button> 
      </div>
      <div className='Nright'>
       {isLorSPage && !isLoginPage && <button><Link to={"/Login"} className='link'>Login</Link></button>}
       {isLorSPage && ! isSignupPage && <button><Link to={"/Signup"} className='link'>Signup</Link></button>}
      </div>
      {isHomePage&& <div className='NrightMain'>
     <button><Link to={"/Home"} className='link'>Buy Property</Link></button>
      <button><Link to={"/ScaleProperty"} className='link'>Sale Property</Link></button>
      </div>}
      </div>
    </div>
  )
}

export default NavBar
