import { IAttr, IElem } from "../../core/tag.js";
import { nav } from "../../html/nav.js";
import { Item } from "./item.js";
export interface Container extends IAttr {
    divider?: string;
    item?: Item | Item[];
}
export declare class container extends nav {
    constructor();
    constructor(attr: Container);
    constructor(elem: IElem);
    constructor(attr: Container, elem: IElem);
}
export declare const Container: (AttrOrElem?: Container | IElem, Elem?: IElem) => container;
