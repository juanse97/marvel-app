import { Comics } from "./comics.interfaces";
import { URL } from "./url.interfaces";

export interface Characters {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: Extension;
    };
    resourceURI: string;
    comics: Comics;
    series: Comics;
    stories: {
        available: number;
        collectionURI: string;
        items: [];
        returned: number;
    };
    events: Comics;
    urls: URL[];
}

export enum Extension {
    GIF = "gif",
    Jpg = "jpg",
}