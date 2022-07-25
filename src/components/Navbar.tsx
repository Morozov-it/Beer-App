import React from 'react'
import { Link } from 'react-router-dom'
import basket from '../assets/basket.svg'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <Link to={'/'} className="btn btn-link">
                    Main
                </Link>
                <button type="button" className="btn btn-link">
                    <img src={basket} alt=''/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar