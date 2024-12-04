export interface RootTracks {
    tracks: Tracks
}

export interface Tracks {
    href: string
    limit: number
    next: string
    offset: number
    previous: string
    total: number
    items: Item[]
}

export interface Item {
    album: Album
    artists: Artist2[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls4
    href: string
    id: string
    is_playable: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
}

interface Album {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    type: string
    uri: string
    artists: Artist[]
    is_playable: boolean
}

interface ExternalUrls {
    spotify: string
}

interface Image {
    url: string
    height: number
    width: number
}

interface Artist {
    external_urls: ExternalUrls2
    href: string
    id: string
    name: string
    type: string
    uri: string
}

interface ExternalUrls2 {
    spotify: string
}

interface Artist2 {
    external_urls: ExternalUrls3
    href: string
    id: string
    name: string
    type: string
    uri: string
}

interface ExternalUrls3 {
    spotify: string
}

interface ExternalIds {
    isrc: string
}

interface ExternalUrls4 {
    spotify: string
}
