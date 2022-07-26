import React from 'react'
import styles from './styles/Spinner.module.scss'

interface Props {
    active: boolean
    children: React.ReactNode
}

const Spinner: React.FC<Props> = ({ active, children }) => {
    if (active){
        return <div className={styles.spinner}>{children}</div>
    } else {
        return <div>{children}</div>
    }
}

export default React.memo(Spinner)