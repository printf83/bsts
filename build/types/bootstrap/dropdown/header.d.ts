import { IAttr, IElem } from "../../core/tag.js";
import { h } from "../../html/h.js";
export declare class header extends h {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Header: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => header;
