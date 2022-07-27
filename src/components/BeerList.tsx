import React from 'react'
import { Beer } from '../api/models'
import BeerItem from './BeerItem'
import styles from '../styles/BeerList.module.scss'

interface Props {
    items: Beer[]
}

const BeerList: React.FC<Props> = ({ items }) => {
    return (
        <div className="row g-2 mt-1 justify-content-center">
            {items.map((item) =>
                <div className={`col-12 ${styles.column}`} key={item.id}>
                    <BeerItem {...item} />
                </div>
            )}
        </div>
    )
}

export default React.memo(BeerList)