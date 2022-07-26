export interface BasketBeer {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string
    target_fg: number
    amount: number
}

export interface BasketState {
    list: BasketBeer[]
    amount: number
    summ: number
}