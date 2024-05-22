import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.scss"
function Nav() {
  return (
    <div className='layout'>
       <nav className='nav'>
           <div className="logo">
               <img src="https://preview.colorlib.com/theme/shop/img/logo.png" alt="" />
           </div>
        <ul className='items'>
          <li className='list'>
            <Link to="/" className='item'>Home</Link>
          </li>
          <li className='list'>
            <Link to="/add" className='item'>add</Link>
          </li>
          <li className='list'>
            <Link to="/basket" className='item'>basket</Link>
          </li>
          <li className='list'>
            <Link to="/wishlist" className='item'>wishlist</Link>
          </li>

        </ul>
      </nav>

    </div>
  )
}

export default Nav
