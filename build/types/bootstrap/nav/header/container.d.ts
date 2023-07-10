import { IElem } from "../../../core/tag.js";
import { Ul, ul } from "../../../html/ul.js";
import { Item } from "./item.js";
import { Link } from "./link.js";
import { Button } from "./button.js";
export interface Container extends Omit<Ul, "item"> {
    type?: "tab" | "pill" | "underline";
    itemWidth?: "fill" | "justified";
    vertical?: true;
    role?: "tablist";
    item?: Item | Item[];
    link?: Link | Link[];
    button?: Button | Button[];
}
export declare class container extends ul {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
