import React from 'react'
import styles from '../styles/Spinner.module.scss'

const Spinner: React.FC = () => {
    return (
        <div className={`d-flex justify-content-center align-items-center ${styles.spinner}`}>
            <div className='spinner-border text-primary' >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default React.memo(Spinner)