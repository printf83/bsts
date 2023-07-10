import { IAttr, IElem } from "../../core/tag.js";
import { div } from "../../html/div.js";
export interface Header extends IAttr {
    close?: boolean;
}
export declare class header extends div {
    constructor();
    constructor(attr: Header);
    constructor(elem: IElem);
    constructor(attr: Header, elem: IElem);
}
export declare const Header: (AttrOrElem?: Header | IElem, Elem?: IElem) => header;
