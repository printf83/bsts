import { IAttr, IElem } from "../../core/tag.js";
import { h } from "../../html/h.js";
export declare class subtitle extends h {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Subtitle: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => subtitle;
