import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../store'
import { deleteFromBasket, increment, decrement } from '../store/basket/slice'
import BasketTable from './BasketTable'
import styles from '../styles/BasketModal.module.scss'

interface Props {
    closeModal: () => void
}

const BasketModal: React.FC<Props> = ({ closeModal }) => {
    const { items, summ } = useAppSelector((state) => ({
        items: state.basket.list,
        summ: state.basket.summ
    }))
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
                        items={items}
                        summ={summ}
                        onDecrement={onDecrement}
                        onIncrement={onIncrement}
                        onDelete={onDelete} />
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">Pay service</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(BasketModal)