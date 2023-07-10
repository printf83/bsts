import { IAttr, IElem } from "../../core/tag.js";
import { p } from "../../html/p.js";
export declare class text extends p {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Text: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => text;
