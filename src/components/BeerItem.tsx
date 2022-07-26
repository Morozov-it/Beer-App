import React from 'react'
import { useAppDispatch } from '../store'
import { addTobasket } from '../store/basket/slice'
import { Beer } from '../store/beer'
import getNumberFormat from '../utils/getNumberFormat'
import getShortString from '../utils/getShortString'
import styles from './styles/BeerItem.module.scss'


const BeerItem: React.FC<Beer> = (item) => {
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(addTobasket(item))
    }

    return (
        <div className={`card ${styles.card}`} >
            <div className={`p-1 ${styles.image}`}>
                <img src={item.image_url} className={styles.img} alt="beer-img" />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.tagline}</h6>
                <p className="card-text flex-grow-1">{getShortString(item.description, 140)}</p>
                <h6 className="card-subtitle mb-2 text-muted">First brewed: {item.first_brewed}</h6>
                <h5 className="card-subtitle mb-2">Price: {getNumberFormat(item.target_fg)} $</h5>
                <button className="btn btn-primary" onClick={onClick}>Add to basket</button>
            </div>
        </div>
    )
}

export default React.memo(BeerItem)