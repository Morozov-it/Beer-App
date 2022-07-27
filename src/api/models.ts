export interface FetchBeerParams {
    page: number
    per_page: number
    beer_name: string
}

export interface BeerItem {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string
    target_fg: number
    ph: number
    attenuation_level: number
    boil_volume: {
        value: number
        unit: string
    },
    food_pairing: string[]
}

export interface Beer {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string
    target_fg: number
}

export interface BasketBeer {
    id: number
    name: string
    target_fg: number
    amount: number
}