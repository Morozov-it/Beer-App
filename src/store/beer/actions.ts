import { createAsyncThunk } from '@reduxjs/toolkit'
import { FetchBeerParams } from '../../api/models'
import { fetchBeer } from '../../api'
import { Beer } from '../../api/models'

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