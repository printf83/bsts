import { IAttr, IElem, tag } from "../core/tag.js";
export declare class noscript extends tag {
    constructor();
    constructor(elem: IElem);
    constructor(attr: IAttr);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Noscript: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => noscript;
