import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import { loadBeer } from './actions'
import { Beer } from '../../api/models'

interface BeerState {
    list: Beer[]
    loading: boolean
    error: string | null
    page: number
    limit: number
    query: string
}

const initialState: BeerState = {
    list: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    query: ''
}

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}
const isLoading = (action: AnyAction) => {
    return action.type.endsWith('pending')
}

const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {
        changeQuery: (state, action: PayloadAction<string>) => {
            state.page = 1
            state.query = action.payload
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        changeLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadBeer.fulfilled, (state, action) => {
                state.list = action.payload
                state.loading = false
            })
            .addMatcher(isLoading, (state) => {
                state.loading = true
            })
            .addMatcher(isError, (state, action: AnyAction) => {
                state.error = action.error.message
                state.loading = false
            })
    }
})

export const { changeQuery, changePage, changeLimit } = beerSlice.actions

export default beerSlice.reducer