import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        List App
      </div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/lists'>Listing</Link>
    </nav>
  )
}

export default Navbar
