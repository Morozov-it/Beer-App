import { configureStore } from '@reduxjs/toolkit'
import { beerReducer } from './beer'
import { basketReducer } from './basket'
import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import { beerAPI } from '../api';

const store = configureStore({
    reducer: {
        beer: beerReducer,
        basket: basketReducer,
        [beerAPI.reducerPath]: beerAPI.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerAPI.middleware)
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;