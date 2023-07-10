import { IAttr, IElem, tag } from "../core/tag.js";
export interface Q extends IAttr {
    cite?: string;
}
export declare class q extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: Q);
    constructor(attr: Q, elem: IElem);
}
export declare const Q: (AttrOrElem?: Q | IElem, Elem?: IElem) => q;
