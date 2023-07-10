import { IAttr, IElem } from "../../../core/tag.js";
import { div } from "../../../html/div.js";
export interface Item extends IAttr {
    active?: boolean;
    role?: "tabpanel";
    labelledby?: string;
    tabindex?: string | number;
    animation?: boolean;
}
export declare class item extends div {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
