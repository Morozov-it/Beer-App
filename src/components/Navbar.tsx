import React from 'react'
import { Link } from 'react-router-dom'
import picture from '../assets/basket.svg'
import { useAppSelector } from '../store'
import styles from '../styles/Navbar.module.scss'
import getNumberFormat from '../utils/getNumberFormat'

interface Props {
    openModal: () => void
}

const Navbar: React.FC<Props> = ({ openModal }) => {
    const basket = useAppSelector((state) => state.basket)

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container">
                <Link to={'/'} className={`btn btn-link ${styles.link}`}>
                    Main
                </Link>
                <button type="button" className={`btn btn-link position-relative ${styles.link}`} onClick={() => openModal()}>
                    <img src={picture} alt='' />
                    {basket.amount ?
                        <>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {basket.amount}
                            </span>
                            <span> {getNumberFormat(basket.summ)} $</span>
                        </>
                        : null
                    }
                </button>
            </div>
        </nav>
    )
}

export default React.memo(Navbar)