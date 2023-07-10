import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { a, A } from "../../html/a.js";
export interface Item extends A {
    active?: boolean;
    action?: boolean;
    color?: bootstrapType.color;
    role?: "tab";
    autoInit?: boolean;
}
export declare class item extends a {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
