import { IElem } from "../../core/tag.js";
import { A } from "../../html/a.js";
import { li } from "../../html/li.js";
export interface Item extends A {
    active?: boolean;
    href?: string;
}
export declare class item extends li {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
