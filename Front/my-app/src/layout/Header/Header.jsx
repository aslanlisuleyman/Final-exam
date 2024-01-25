import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.scss"
const Header = () => {
  return (
    <div className='header'>
        <div>
            <p>COLO <span>SHOP</span></p>
        </div>
        <div>
            <ul>
                <Link className='link' to="/">Home </Link>
                <Link className='link' to="/add">Add</Link>
                <Link className='link' to="/basket">Basket </Link>
                <Link className='link' to="/wishlist">Wishlist </Link>
            </ul>
        </div>

    </div>
  )
}

export default Header