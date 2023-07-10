import { IElem } from "../../../core/tag.js";
import { Li, li } from "../../../html/li.js";
import { Button } from "./button.js";
import { Link } from "./link.js";
export interface Item extends Li {
    role?: "presentation";
    dropdown?: boolean;
    link?: Link;
    button?: Button;
}
export declare class item extends li {
    constructor();
    constructor(attr: Item);
    constructor(elem: IElem);
    constructor(attr: Item, elem: IElem);
}
export declare const Item: (AttrOrElem?: Item | IElem, Elem?: IElem) => item;
