import { bootstrapType } from "../../core/bootstrap.js";
import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Item extends IAttr {
    role?: "alert" | "status";
    live?: "assertive" | "polite";
    atomic?: boolean;
    autohide?: boolean;
    delay?: number;
    color?: bootstrapType.color;
    animation?: boolean;
    debug?: boolean;
}
export declare class item extends div {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
