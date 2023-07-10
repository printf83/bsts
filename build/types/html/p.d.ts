import { IAttr, IElem, tag } from "../core/tag.js";
export interface P extends IAttr {
    lead?: boolean;
}
export declare class p extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: P);
    constructor(attr: P, elem: IElem);
}
export declare const P: (AttrOrElem?: P | IElem, Elem?: IElem) => p;
