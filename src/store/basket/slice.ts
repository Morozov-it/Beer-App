import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BasketBeer } from '../../api/models'

interface BasketState {
    list: BasketBeer[]
    amount: number
    summ: number
}

const initialState: BasketState = {
    list: [],
    amount: 0,
    summ: 0,
}

const getCountState = (state: BasketState) => {
    state.amount = state.list.length
    state.summ = state.list.reduce((acc, item) => {
        acc += item.target_fg * item.amount
        return acc
    }, 0)
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addTobasket: (state, action: PayloadAction<Omit<BasketBeer, 'amount'>>) => {
            const existed = state.list.find((i) => i.id === action.payload.id)

            if (existed) {
                state.list = state.list.map((item) => {
                    if (item.id === action.payload.id) {
                        return {...item, amount: item.amount + 1}
                    }
                    return item
                })
            } else {
                state.list.push({ ...action.payload, amount: 1 })
            }

            getCountState(state)
        },
        deleteFromBasket: (state, action: PayloadAction<number>) => {
            state.list = state.list.filter((i) => i.id !== action.payload)

            getCountState(state)
        },
        increment: (state, action: PayloadAction<number>) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload) {
                    return {...item, amount: item.amount + 1}
                }
                return item
            })

            getCountState(state)
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.list = state.list.map((item) => {
                if (item.id === action.payload) {
                    return {...item, amount: item.amount !== 1 ? item.amount - 1 : 1}
                }
                return item
            })

            getCountState(state)
        },
    },
})

export const { addTobasket, deleteFromBasket, increment, decrement } = basketSlice.actions

export default basketSlice.reducer