import { IAttr, tag } from "../core/tag.js";
export interface Style extends IAttr {
    media?: string;
    type?: "text/css";
}
export declare class style extends tag {
    constructor();
    constructor(elem: string);
    constructor(attr: Style);
    constructor(attr: Style, elem: string);
}
export declare const Style: (AttrOrElem?: Style | string, Elem?: string) => style;
