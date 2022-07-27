import React from 'react'
import { BasketBeer } from '../store/basket'
import getNumberFormat from '../utils/getNumberFormat'

interface Props {
    items: BasketBeer[]
    onIncrement: (id: number) => void
    onDecrement: (id: number) => void
    onDelete: (id: number) => void
    summ: number
}

const BasketTable: React.FC<Props> = ({ items, onDecrement, onIncrement, onDelete, summ }) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">№</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price, $</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => 
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{getNumberFormat(item.target_fg)}</td>
                            <td>{item.amount}</td>
                            <td>
                                <div className="btn-group">
                                    <button type="button"
                                        className="btn btn-outline-primary btn-sm mr-1"
                                        onClick={() => onIncrement(item.id)}>+</button>
                                    <button type="button"
                                        className="btn btn-outline-primary btn-sm mr-1"
                                        onClick={() => onDecrement(item.id)}>-</button>
                                    <button type="button"
                                        className="btn btn-outline-primary btn-sm"
                                        onClick={() => onDelete(item.id)}>delete</button>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
                <div className='fw-bold'>Total: {getNumberFormat(summ)} $</div>
            </table>
        </div>
    )
}

export default React.memo(BasketTable)