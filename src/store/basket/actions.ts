import { createAsyncThunk } from '@reduxjs/toolkit'
import { BasketState } from './slice'

export const loadBasket = createAsyncThunk<BasketState, undefined, { state: { basket: BasketState} }>(
    'basket/loadBasket',
    async function (_, { getState }) {
        const basket = await sessionStorage.getItem('basket')
        if (basket) {
            return JSON.parse(basket)
        } else {
            return getState().basket
        }
    }
)