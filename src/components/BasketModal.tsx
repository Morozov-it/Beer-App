import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { deleteFromBasket, increment, decrement, deleteAll } from '../store/basket/slice'
import BasketTable from './BasketTable'
import styles from '../styles/BasketModal.module.scss'

interface Props {
    closeModal: () => void
}

const BasketModal: React.FC<Props> = ({ closeModal }) => {
    const basket = useAppSelector((state) => state.basket)
    const dispatch = useAppDispatch()

    const onDelete = useCallback((id: number) => {
        dispatch(deleteFromBasket(id))
    }, [dispatch])

    const onIncrement = useCallback((id: number) => {
        dispatch(increment(id))
    }, [dispatch])

    const onDecrement = useCallback((id: number) => {
        dispatch(decrement(id))
    }, [dispatch])

    const onDeleteAll = useCallback(() => {
        dispatch(deleteAll())
    }, [dispatch])

    return (
        <div className={`modal ${styles.modal}`} onClick={() => closeModal()}>
            <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Basket</h5>
                    <button type="button" className="btn-close" onClick={() => closeModal()}></button>
                </div>
                <div className="modal-body">
                    <BasketTable
                        items={basket.list}
                        summ={basket.summ}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        onDelete={onDelete}
                        />
                </div>
                    <div className="modal-footer">
                        <button type="button"
                            className="btn btn-outline-primary"
                            onClick={onDeleteAll}
                        >Clear</button>
                        <button type="button"
                            className="btn btn-primary"
                            onClick={() => alert(`You have bought ${basket.amount} beers`)}
                        >Pay service</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BasketModal)