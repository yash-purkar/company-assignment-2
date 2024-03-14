import React from 'react'
import './navbar.css'
import navLogo from '../../assets/nav_logo.png'
export const Navbar = () => {
  return (
    <nav className='navigation'>
        <div>
           <img src={navLogo} alt='Brand' width={300} height={70}/>
        </div>
        <ul className='navlinks'>
            <li><a href="https://www.acrossassist.com/about" className='navlink blue_color' target='_blank' rel='noreferrer'>About Us</a></li>
            <li><a href="https://www.acrossassist.com/contact" className='navlink blue_color' target='_blank' rel='noreferrer'>Contact Us</a></li>
        </ul>
    </nav>
  )
}

