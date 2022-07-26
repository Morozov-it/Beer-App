import axios from 'axios'

const BASE_URL = 'https://api.punkapi.com/v2/'
export const apiInstance = axios.create({ baseURL: BASE_URL })

export interface FetchBeerParams {
    page: number
    per_page: number
    beer_name: string
}

export const fetchBeer = async <T>({ page = 1, per_page = 10, beer_name = '' }: FetchBeerParams) => {
    return apiInstance.get<T>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}${beer_name ? '&beer_name=' + beer_name : ''}`)
}



