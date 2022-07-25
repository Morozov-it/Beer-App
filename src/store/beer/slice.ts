import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit'
import { loadBeer } from './actions'
import { BeerState } from './models'

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
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadBeer.fulfilled, (state, action) => {
                state.list = action.payload
            })
            .addMatcher(isLoading, (state) => {
                state.loading = true
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default beerSlice.reducer