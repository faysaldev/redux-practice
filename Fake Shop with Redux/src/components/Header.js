import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className="header">
            <Link to='/' exact>
            <h3>Fake Shoping Shop</h3>
            </Link>
        </div>
    )
}

export default Header
