import { IAttr, tag } from "../core/tag.js";
export interface Col extends IAttr {
    span?: number;
}
export declare class col extends tag {
    constructor();
    constructor(attr: Col);
}
export declare const Col: (Attr?: Col) => col;
