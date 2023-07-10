import { bootstrapType } from "../../core/bootstrap.js";
import { IElem } from "../../core/tag.js";
import { Li, li } from "../../html/li.js";
export interface Item extends Li {
    active?: boolean;
    disabled?: boolean;
    action?: boolean;
    color?: bootstrapType.color;
    handleActive?: boolean;
}
export declare class item extends li {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
