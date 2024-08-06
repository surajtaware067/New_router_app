import React from 'react'
// import { Link } from 'react-router-dom' 
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    
    <div>
      <nav>
        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </nav>
    </div>
  )
}

export default Navbar
