import React from 'react'
import { useParams } from 'react-router-dom'
import { beerAPI } from '../../api'
import Spinner from '../../components/Spinner'
import { useAppDispatch, useAppSelector } from '../../store'
import { addTobasket } from '../../store/basket/slice'
import getNumberFormat from '../../utils/getNumberFormat'
import styles from '../../styles/ItemPage.module.scss'

const ItemPage: React.FC = () => {
    const { id = '' } = useParams<{ id: string }>()
    const { data = [], error, isLoading } = beerAPI.useFetchBeerItemQuery(id)
    const item = data[0]
    const basket = useAppSelector((state) => state.basket.list)
    const inBasket = basket.find((i) => i.id === item.id)?.amount
    const dispatch = useAppDispatch()

    const onClick = () => {
        dispatch(addTobasket({
            id: item?.id ?? 1,
            name: item?.name ?? '',
            target_fg: item?.target_fg ?? 1,
        }))
    }

    return (
        <div>
            {item ? 
                <div className={`card text-start ${styles.card}`}>
                    <div className={`p-1 ${styles.image}`}>
                        <img src={item.image_url} className={styles.img} alt="beer-img" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{item.tagline}</h6>
                        <p className="card-text">{item.description}</p>
                        <span>Alcohol: {item.ph + '%'}</span> <br />
                        <span>Volume: {item.boil_volume.value + ' ' + item.boil_volume.unit}</span>
                        <h6 className="card-subtitle mt-2 mb-2">Rating: {item.attenuation_level}&#9733;</h6>
                        <h6 className="card-subtitle mb-2 text-muted">First brewed: {item.first_brewed}</h6>
                        <ul className="list-group">
                            <span className='fw-bold'>Food pairing: </span>
                            {item.food_pairing.map((i, index) => 
                                <li className="list-group-item" key={index}>{i}</li>
                            )}
                        </ul>
                        <h5 className="card-subtitle mt-2 mb-2">Price: {getNumberFormat(item.target_fg)} $</h5>
                        <button className="btn btn-primary" onClick={onClick}>
                            {inBasket || 'Add to basket'}
                        </button>
                    </div>
                </div>
                : null
            }
            {isLoading && <Spinner />}
            {error && <div className="alert alert-danger mt-3">Fetching data error</div>}
        </div>
    )
}

export default ItemPage