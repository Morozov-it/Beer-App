import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchBeer, FetchBeerParams } from '../../api'
import { Beer } from './models'

export const loadBeer = createAsyncThunk<Beer[], FetchBeerParams, { rejectValue: string }>(
    'beer/loadBeer',
    async function (params, { rejectWithValue }) {
        const response = await fetchBeer<Beer[]>(params)

        if (response.status !== 200) {
            return rejectWithValue('Server Error!')
        }

        return response.data
    }
)