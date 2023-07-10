import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export declare class item extends div {
    constructor();
    constructor(attr: IAttr);
    constructor(elem: IElem);
    constructor(attr: IAttr, elem: IElem);
}
export declare const Item: (AttrOrElem?: IAttr | IElem, Elem?: IElem) => item;
