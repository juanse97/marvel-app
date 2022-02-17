import { Characters } from "./characters.interfaces";

export interface Data {
    offset:  number;
    limit:   number;
    total:   number;
    count:   number;
    results: Characters[];
}