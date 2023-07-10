import { IAttr, tag } from "../core/tag.js";
export interface Source extends IAttr {
    media?: string;
    sizes?: string;
    src?: string;
    srcset?: string;
    type?: string;
    elem?: undefined;
}
export declare class source extends tag {
    constructor();
    constructor(attr: Source);
}
export declare const Source: (Attr?: Source) => source;
