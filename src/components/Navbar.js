import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <span className='logo'>Redux Store</span>
            <div className='links'>
                <Link to="/" className='navLink'>Home</Link>
                <Link to="/cart" className='navLink'>Cart</Link>
                <span className='cartCounter'>Cart count: 0</span>
            </div>
        </div>
    )
}

export default Navbar
