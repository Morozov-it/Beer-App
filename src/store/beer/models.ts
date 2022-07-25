export interface Beer {
    id: number
    name: string
    tagline: string
    first_brewed: string
    description: string
    image_url: string
    target_fg: number
}

export interface BeerState {
    list: Beer[]
    loading: boolean
    error: string | null
    page: number
    limit: number
    query: string
}