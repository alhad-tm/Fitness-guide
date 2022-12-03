import React from 'react'
import "./Header.css"
import Logo from '../../assets/logo.png'
// import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div className="header">
    <img src={Logo} alt="" className='logo' />
    <ul className='header-menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
       {/* <Link to='/plans'> <li>Plans</li></Link> */}
        <li>Testimonials</li>
    </ul>
   </div>
  )
}

export default Header