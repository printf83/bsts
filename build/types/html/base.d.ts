import { IAttr, tag } from "../core/tag.js";
export interface Base extends IAttr {
    href?: string;
    target?: "_blank" | "_parent" | "_self" | "_top";
}
export declare class base extends tag {
    constructor();
    constructor(attr: Base);
}
export declare const Base: (Attr?: Base) => base;
