export interface URL {
    type: URLType;
    url:  string;
}

export enum URLType {
    Comiclink = "comiclink",
    Detail = "detail",
    Wiki = "wiki",
}