import { IAttr, IElem, tag } from "../core/tag.js";
export interface Bdo extends IAttr {
    dir?: "ltr" | "rtl";
}
export declare class bdo extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Bdo);
    constructor(attr: Bdo, elem: IElem);
}
export declare const Bdo: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => bdo;
