import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
    const items = useSelector((state) => state.cart);

    return (
        <div className='navbar'>
            <span className='logo'>Redux Store</span>
            <div className='links'>
                <Link to="/" className='navLink'>Home</Link>
                <Link to="/cart" className='navLink'>Cart</Link>
                <span className='cartCounter'>Cart count: {items.length}</span>
            </div>
        </div>
    )
}

export default Navbar
