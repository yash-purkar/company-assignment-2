import React from 'react'
import './navbar.css'

export const Navbar = () => {
  return (
    <nav className='navigation'>
        <div>
            <h1>Across Assist</h1>
        </div>
        <ul className='navlinks'>
            <li><a href="l" className='navlink'>About Us</a></li>
            <li><a href="l" className='navlink'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

