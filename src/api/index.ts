import axios from 'axios'

interface Params {
    page: number
    per_page: number
    beer_name: string
}

const BASE_URL = 'https://api.punkapi.com/v2/'
export const apiInstance = axios.create({ baseURL: BASE_URL })

export const fetchBeer = async <T>({ page = 1, per_page = 10, beer_name = '' }: Params) => {
    return apiInstance.get<T>(`https://api.punkapi.com/v2/beers?page=${page}&per_page=${per_page}&beer_name=${beer_name}`)
}



