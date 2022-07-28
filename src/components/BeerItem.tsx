import React from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { addTobasket } from '../store/basket/slice'
import { Beer } from '../api/models'
import getNumberFormat from '../utils/getNumberFormat'
import getShortString from '../utils/getShortString'
import styles from '../styles/BeerItem.module.scss'
import { useNavigate } from 'react-router-dom'
import notImage from '../assets/no-image.png'

const BeerItem: React.FC<Beer> = (item) => {
    const basket = useAppSelector((state) => state.basket.list)
    const inBasket = basket.find((i) => i.id === item.id)?.amount
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.stopPropagation()
        dispatch(addTobasket({
            id: item?.id ?? 1,
            name: item?.name ?? '',
            target_fg: item?.target_fg ?? 1,
        }))
    }

    return (
        <div className={`card ${styles.card}`} onClick={() => navigate(`/${item.id}`)}>
            <div className={`p-1 ${styles.image}`}>
                <img src={item.image_url || notImage} className={styles.img} alt="beer-img" />
            </div>
            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{item.tagline}</h6>
                <p className="card-text flex-grow-1">{getShortString(item.description, 140)}</p>
                <h6 className="card-subtitle mb-2 text-muted">First brewed: {item.first_brewed}</h6>
                <h5 className="card-subtitle mb-2">Price: {getNumberFormat(item.target_fg)} $</h5>
                <button className="btn btn-primary" onClick={onClick}>
                    {inBasket || 'Add to basket'}
                </button>
            </div>
        </div>
    )
}

export default React.memo(BeerItem)