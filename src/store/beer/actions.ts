import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBeer } from '../../api'
import { Beer, BeerState } from './models'

export const loadBeer = createAsyncThunk<Beer[], undefined, { rejectValue: string, state: { beer: BeerState} }>(
    'beer/loadBeer',
    async function (_, { rejectWithValue, getState }) {
        const params = {
            page: getState().beer.page,
            per_page: getState().beer.limit,
            beer_name: getState().beer.query
        }
        const response = await fetchBeer<Beer[]>(params)

        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }

        return response.data
    }
)