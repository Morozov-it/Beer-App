import React from 'react'
import { Link } from 'react-router-dom'
import basket from '../assets/basket.svg'
import { useAppSelector } from '../store'
import styles from '../styles/Navbar.module.scss'

interface Props {
    openModal: () => void
}

const Navbar: React.FC<Props> = ({ openModal }) => {
    const amount = useAppSelector((state) => state.basket.amount)

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link to={'/'} className={`btn btn-link ${styles.link}`}>
                    Main
                </Link>
                <button type="button" className="btn btn-link position-relative" onClick={() => openModal()}>
                    <img src={basket} alt='' />
                    {amount ?
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            {amount}
                        </span>
                        : null
                    }
                </button>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)