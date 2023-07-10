import { IAttr, IElem } from "../core/tag.js";
import { div } from "../html/div.js";
export declare class row extends div {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Row: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => row;
