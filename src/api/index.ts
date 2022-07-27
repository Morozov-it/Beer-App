import axios from 'axios'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FetchBeerParams, BeerItem } from './models'

export const BASE_URL = 'https://api.punkapi.com/v2'
export const apiInstance = axios.create({ baseURL: BASE_URL })

export const fetchBeer = async <T>({ page = 1, per_page = 10, beer_name = '' }: FetchBeerParams) => {
    return apiInstance.get<T>(`/beers?page=${page}&per_page=${per_page}${beer_name ? '&beer_name=' + beer_name : ''}`)
}

//RTK-Query
export const beerAPI = createApi({
    reducerPath: 'beerAPI',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (build) => ({
        fetchBeerItem: build.query<BeerItem[], string>({
            query: (id = '') => ({
                url: `/beers/${id}`
            })
        })
    })
})
