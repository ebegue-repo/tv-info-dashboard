export type ShowDetailsType = {
    arrayIndex: number;
    id: number,
    url: string,
    name: string,
    type: string,
    language: string,
    genres: string[],
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: string,
    ended: string,
    officialSite: string,
    schedule: Object,
    rating: Rating,
    weight: number,
    network: Object,
    webChannel: string,
    dvdCountry: string,
    externals: Object,
    image: Image,
    summary: string,
    updated: number,
    _links: Object
}

export type SearchResultsType = {
    score: number,
    show: ShowDetailsType
}

export type Image = {
    medium: string,
    original: string
}

export type Rating = {
    "average": number
}